import React, { Component } from "react";
import getAxios from "../../services/fetch";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import LoaderSection from "../Loader/Loader";

class FinderImage extends Component {
  state = {
    gallery: [],
    query: "",
    page: 1,
    isLoading: false,
    error: false,
  };

  ChangeQuery = (query) => {
    this.setState({
      query,
      page: 1,
      gallery: [],
    });
  };

  fetchRequest = async () => {
    try {
      const { query, page } = this.state;
      const response = await getAxios(query, page);
      return response.data.hits;
    } catch (error) {
      this.setState({
        error: true,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query) {
      this.setState({
        isLoading: true,
      });
      const request = async () => {
        const result = await this.fetchRequest();
        this.setState({
          gallery: [...result],
          isLoading: false,
        });
      };
      request();
    }

    if (page !== prevState.page) {
      this.setState({
        isLoading: true,
      });
      const request = async () => {
        const result = await this.fetchRequest();
        this.setState((state) => ({
          gallery: [...state.gallery, ...result],
          isLoading: false,
        }));

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      };
      request();
    }
  }

  pageChange = () => {
    this.setState((state) => ({
      page: state.page + 1,
    }));
  };

  render() {
    const { gallery, isLoading, error } = this.state;
    return (
      <>
        <Searchbar ChangeQuery={this.ChangeQuery} />
        {!!gallery.length && !error && (
          <>
            <ImageGallery gallery={gallery} />
            {!isLoading && <Button pageChange={this.pageChange} />}
          </>
        )}
        {isLoading && <LoaderSection />}
      </>
    );
  }
}
export default FinderImage;

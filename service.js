class UsersDataService {
  constructor(url) {
    this.url = url;
    this.data = null;
  }

  async fetchData() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      this.data = await response.json();
    } catch (error) {
      console.error("An error occurred: ", error);
    }
  }

  getData() {
    return this.data;
  }
}

// export default UsersDataService;

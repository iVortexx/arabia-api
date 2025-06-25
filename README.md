# Arabia API Hub

A modern, fast, and free-to-use REST API that provides extensive data on countries and cities in the Arab world. Perfect for developers, researchers, and creators.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/iVortexx/arabia-api)
[![GitHub issues](https://img.shields.io/github/issues/iVortexx/arabia-api.svg)](https://github.com/iVortexx/arabia-api/issues)
[![GitHub forks](https://img.shields.io/github/forks/iVortexx/arabia-api.svg)](https://github.com/iVortexx/arabia-api/network)
[![GitHub stars](https://img.shields.io/github/stars/iVortexx/arabia-api.svg)](https://github.com/iVortexx/arabia-api/stargazers)

**[Visit the Live Demo & API Documentation](https://arabia-api.vercel.app/)**

---

## Features

-   **Completely Free & Open Source**: No API keys, no rate limits, no hidden costs.
-   **Bilingual Support**: Get responses in both Arabic (`ar`) and English (`en`) using the `lang` query parameter.
-   **Blazing Fast**: Built on the edge with Next.js for millisecond response times.
-   **Comprehensive Endpoints**: Access data for all countries, specific cities, or perform powerful searches.
-   **Utility Focused**: Includes helpful endpoints like random country/city selectors.

## Quick Start

All API endpoints are available under the base URL of the deployed application.

**Base URL**: `https://arabia-api.vercel.app/api`

For example, to get a list of all countries in English:

```bash
curl "https://arabia-api.vercel.app/api/countries"
```

## API Endpoints

For full, interactive documentation, please visit the **[API Docs](https://arabia-api.vercel.app/docs)** page.

| Method | Endpoint                        | Description                                     |
| :----- | :------------------------------ | :---------------------------------------------- |
| `GET`  | `/countries`                    | Get a list of all supported countries.          |
| `GET`  | `/countries/:code`              | Get a specific country by its ISO code.         |
| `GET`  | `/countries/code/:name`         | Get a country's code by its name.               |
| `GET`  | `/countries/random`             | Get a single random country.                    |
| `GET`  | `/cities`                       | Get a list of all cities.                       |
| `GET`  | `/cities?country=:code`         | Get all cities for a specific country.          |
| `GET`  | `/cities/random`                | Get a single random city.                       |
| `GET`  | `/search?q=:query`              | Search for countries and cities.                |


## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [ShadCN/UI](https://ui.shadcn.com/)

## Running Locally

To get a local copy up and running, follow these simple steps.

1.  **Clone the repo**
    ```sh
    git clone https://github.com/iVortexx/arabia-api.git
    ```
2.  **Navigate to the project directory**
    ```sh
    cd arabia-api
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Run the development server**
    ```sh
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## About the Creator

This project was built by **Mohamed Hany (iVortexx)**, a passionate AI and backend developer.

-   **GitHub**: [@iVortexx](https://github.com/iVortexx)

## License

Distributed under the MIT License.
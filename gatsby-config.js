module.exports = {
  siteMetadata: {
    title: "Jüssi | The Business Agency",
    description: "Somos uma agência digital que faz parte do grupo WPP, especializada em potencializar resultados de negócio para marcas globais e empresas inovadoras por meio de uma abordagem consultiva. Temos performance em nosso DNA e focamos em desempenho e excelência na execução de cada projeto."
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-110374544-1",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

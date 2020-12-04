new Vue({
    el: '#news',
  
    data() {
      return {
        Titulo1: '',
        descripcion1: '',
        fecha1: '',
        fuente1: '',
        imagen1: '',
        url1: '',
  
        Titulo2: '',
        descripcion2: '',
        fecha2: '',
        fuente2: '',
        imagen2: '',
        url2: '',
  
        Titulo3: '',
        descripcion3: '',
        fecha3: '',
        fuente3: '',
        imagen3: '',
        url3: '',
  
        Titulo4: '',
        descripcion4: '',
        fecha4: '',
        fuente4: '',
        imagen4: '',
        url4: '',
  
  
      }
    },
    async created() {
      // GET request using fetch with async/await
      const response1 = await fetch("https://gnews.io/api/v4/search?q=example&token=8cdf2f58ef2f5a5b66966bf13525c640");
      const data1 = await response1.json();
      this.Titulo1 = data1.articles[5].title,
      this.descripcion1 = data1.articles[5].description,
      this.fecha1 = data1.articles[5].publishedAt.slice(0,10),
      this.fuente1 = data1.articles[5].source.name,
      this.imagen1 = data1.articles[5].image,
      this.url1 = data1.articles[5].url;
  
      this.Titulo2 = data1.articles[1].title,
      this.descripcion2 = data1.articles[1].description,
      this.fecha2 = data1.articles[1].publishedAt.slice(0,10),
      this.fuente2 = data1.articles[1].source.name,
      this.imagen2 = data1.articles[1].image,
      this.url2= data1.articles[1].url;
  
      this.Titulo3 = data1.articles[2].title,
      this.descripcion3 = data1.articles[2].description,
      this.fecha3 = data1.articles[2].publishedAt.slice(0,10),
      this.fuente3 = data1.articles[2].source.name,
      this.imagen3 = data1.articles[2].image,
      this.url3= data1.articles[2].url;
  
      this.Titulo4 = data1.articles[6].title,
      this.descripcion4 = data1.articles[6].description,
      this.fecha4 = data1.articles[6].publishedAt.slice(0,10),
      this.fuente4 = data1.articles[6].source.name,
      this.imagen4 = data1.articles[6].image,
      this.url4= data1.articles[6].url,
      console.log(data1);
    
    }
 
  
  })
  
  
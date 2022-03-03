const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  livreEmprunte1fois();
  lessRented(books);



  function livreEmprunte1fois(){
      //rentes > 1
      for( let ele in books) {
          if (books[ele].rented >= 1)
          {
              console.log(books[ele]);
            }
            else {
                console.log(nope) ;
            }
      }
  }

  function lessRented(arr) {
    let lessRented;
    let tmp=arr[0].rented;
    arr.forEach(book => {
      if (book.rented < tmp) {
        tmp = book.rented;
        lessRented = book;
      }
    })
    return lessRented;
  }
  
  function mostRented(arr) {
    let mostRented;
    let tmp=0;
    arr.forEach(book => {
      if (book.rented > tmp) {
        tmp = book.rented;
        mostRented = book;
      }
    })
    return mostRented;
  }
  
  function findById(arr,id) {
    let result;
    arr.forEach(book => {
      if (book.id === id) {
        result = book.title;
      }
    })
    return result;
  }
  
  function deleteById(arr, id) {
    for (let i=0; i<arr.length; i++) {
      if (arr[i].id === id) {
        console.log(`Suppression de ${arr[i].title} effectuée.`)
        arr.splice(i,1);
      }
    }
  }
  
  function sortByName(arr) {
    let newArr = arr.sort(function (a,b) {
      return a.title == b.title ? 0 : a.title>b.title ? 1 : -1;
    });
    return newArr;
  }

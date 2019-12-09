window.onload = function () {
  readFile('https://raw.githubusercontent.com/promo3Saint-Maur/files/master/articles.json', function (articles) {
    console.log(articles);

    //requete AJAX

    // ----------------------------------------STEP 1

    let Article = class {
      constructor(id, title, content, resumes, author, publishedDate, img, tags) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.resumes = resumes;
        this.author = author;
        this.publishedDate = publishedDate;
        this.img = img;
        this.tags = tags;
      }

      // ----------------------------------------STEP 1.2

      setId(a) { this.id = a; }
      setTitle(a) { this.title = a; }
      setContent(a) { this.content = a; }
      setResumes(a) { this.resumes = a; }
      setAuthor(a) { this.author = a; }
      setPublishedDate(a) { this.publishedDate = a; }
      setImg(a) { this.img = a; }
      setTags(a) { this.tags = a; }

      getId() { return this.id; }
      getTitle() { return this.title; }
      getContent() { return this.content; }
      getResumes() { return this.resumes; }
      getAuthor() { return this.author; }
      getPublishedDate() { return this.publishedDate; }
      getImg() { return this.img; }
      getTags() { return this.tags; }
    }

    //     articles = new Article(articles[0].id, articles[0].title);/
    //    article.setId(22);
    console.log(articles.length);




    for (const i = 0; i < articles.length; i++) {
      console.log(i);
      // <article class="article-preview" data-id="1">
      const articleElement = document.createElement('article');
      articleElement.setAttribute('data-id', articles[i].getId());


      ////     <h2>Un super article 1</h2>
      const articleTitle = articleElement.createElement('h2');
      articleTitle.innerText = articles[i].getTitle();

      ////     <div class="article-preciew-body">
      const articlePreviewBody = articleElement.createElement('div');
      articlePreviewBody.classList.add("articlePreviewBody");

      ////////         <div class="article-preview-img">
      const articlePreviewImg = articlePreviewBody.createElement('div');
      articlePreviewImg.classList.add("articlePreviewImg");
      const APIi = articlePreviewImg.createElement('img');
      APTi.setAttribute('src', articles[i].getImg())

      ////////         <div class="article-preview-content">
      const articlePreviewContent = articlePreviewBody.createElement('div');
      articlePreviewContent.classList.add("articlePreviewContent");
      const APCp = articlePreviewContent.createElement('p');
      APCp.innerText = articles[i].getResume();

      ////////         <div class="article-preview-tags">
      const articlePreviewTags = articlePreviewBody.createElement('div');
      articlePreviewTags.classList.add("articlePreviewTags");
      const APTp = articlePreviewTags.createElement('p');
      APCt.innerText = articles[i].getTags();


    }




    // ------------------- STEP 2 ---------------------
    // AFFICHER DANS LA SECTION DU MAIN DE LA PAGE 'home.html' QUI EST LINK A CE SCRIPT LES ARTICLES

    // exemple structure html pour les articles ------------------------>
    // <article class="article-preview" data-id="1">
    //     <h2>Un super article 1</h2>
    //     <div class="article-preciew-body">
    //         <div class="article-preview-img">
    //             <img src="http://fauxsite.com/content/medias/img/article1.jpg" alt="miniature article 1">
    //         </div>
    //         <div class="article-preview-content">
    //             <p>Ceci est un texte taper au pif donc ne jugé pas sur l'orthographe général des documents fournis...</p>
    //         </div>
    //         <div class="article-preview-tags">
    //             <p>tag1 tag2 tagada</p>
    //         </div>
    //     </div>
    // </article>

    // exemple code javascript pour la generation des elements html ----------------->
    // var articleBloc = document.createElement('article');
    // articleBloc.ClassList.add('article-preview');
    //articleBloc.setAttribute('data-id', articles[i].getId()) // <---- Dans cette exemple il faut s'imaginer qu'on boucle (for) sur un tableau contenant des 'instances' de la class 'Article'
    // var articleTitle = document.createElement('h2');
    // articleTitle.innerText = articles[i].getTitle(); // <---- Dans cette exemple il faut s'imaginer qu'on boucle (for) sur un tableau contenant des 'instances' de la class 'Article'
    // articleBloc.append(articleTitle);
    // etc.....





    // ------------------ STEP 3 -----------------------
    // AU CLICK SUR LA PREVIEW D'UN ARTICLE (l'elements html) REDIRIGER VERS LA PAGE 'article.html' --->
    // L'url devras ressembler à celle ci (le chemin d'accès vers le fichier + un parametre de type GET) :
    // 'file:///C:/Users/brian/Desktop/JavascriptMe/article.html?id=1' <----
    // --- La valeur du parametre id présent dans l'url doit correspondre a l'article clicker





  });
}

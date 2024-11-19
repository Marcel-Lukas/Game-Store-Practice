function init() {
  getFromStorage();
  renderGames();
}

function getFromStorage() {
  for (let indexGame = 0; indexGame < games.length; indexGame++) {
      checkStorageComments(indexGame);
      checkStorageLikes(indexGame);
  }
}

function checkStorageComments(indexGame) {
  let gameComments = JSON.parse(sessionStorage.getItem("comments" + indexGame));

  if (gameComments == null) {
      gameComments = games[indexGame].comments;
  }
  else {
      games[indexGame].comments = gameComments;
  }
}


function checkStorageLikes(indexGame) {

  let likeStatus = JSON.parse(sessionStorage.getItem("likeStatus" + indexGame));

  if (likeStatus == null) {
      likeStatus = games[indexGame].liked;
  }
  
  else {
      games[indexGame].liked = likeStatus;
  }



  let numberOfLikes = JSON.parse(sessionStorage.getItem("numberOfLikes" + indexGame));

  if (numberOfLikes == null) {
      numberOfLikes = games[indexGame].likes;
  }

  else {
      games[indexGame].likes = numberOfLikes;
  }
}


function addComment(indexGame) {

  let nicknameInputRef = document.getElementById("nickname" + indexGame);
  let commentInputRef = document.getElementById("commentary" + indexGame);
  let nickNameInput = nicknameInputRef.value;
  let commentInput = commentInputRef.value;
  let newComment = [{ "user": nickNameInput, "comment": commentInput }];
  getInput(commentInput, nickNameInput, newComment, indexGame);
  commentInputRef.value = '';
  nicknameInputRef.value = '';
  renderComments(indexGame);
  saveToStorage(indexGame);
}


function getInput(commentInput, nickNameInput, newComment, indexGame) {
  if (commentInput == '' || nickNameInput == '') {
      alert('Eingabe in beiden Feldern erforderlich');
  }

  else if (commentInput.length <= 2 || nickNameInput.length <= 2) {
      alert('Eingabe zu kurz')
  }

  else {
    games[indexGame].comments.unshift(newComment[0]);
  }
}


function saveToStorage(indexGame) {
  let gameComments = games[indexGame].comments;
  sessionStorage.setItem("comments" + indexGame, JSON.stringify(gameComments));

  let numberOfLikesRef = document.getElementById("likeCount" + indexGame);
  let likeStatus = games[indexGame].liked;

  let numberOfLikes = numberOfLikesRef.innerHTML;
  sessionStorage.setItem("numberOfLikes" + indexGame, JSON.stringify(numberOfLikes));
  sessionStorage.setItem("likeStatus" + indexGame, JSON.stringify(likeStatus));

}


function changeLike(indexGame) {

  let likeCount = document.getElementById("likeCount" + indexGame);

  let likes = parseInt(likeCount.innerHTML);

  let likeButton = document.getElementById("likeButton" + indexGame);

  checkLikeStatus(indexGame, likes, likeButton, likeCount);
}


function checkLikeStatus (indexGame, likes, likeButton, likeCount) {
  if (games[indexGame].liked === false) {

      likeButton.classList.replace('btn-unlike', 'btn-like');
      likeCount.innerHTML = likes + 1;
      return games[indexGame].liked = true;

  }

  if (games[indexGame].liked === true) {

      likeButton.classList.replace('btn-like', 'btn-unlike');
      likeCount.innerHTML = likes - 1;
      return games[indexGame].liked = false;

  }
}


function toggleLike(indexGame) {
  changeLike(indexGame);
  saveToStorage(indexGame);
}


function buyTrolling() {
  const url = "notindex.html";
  window.open(url, "_self");
}

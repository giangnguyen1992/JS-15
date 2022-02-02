const display = (followers) => {
  const container = document.querySelector(".container");

  followers.forEach((follower) => {
    const followerHtml = `
      <article class="card">
        <img src="${follower.avatar_url}" alt="person">
            <h4>${follower.login}</h4>
        <a href="${follower.url}" class="btn">view profile</a>
      </article>
      `;

    container.insertAdjacentHTML("beforeend", followerHtml);
  });
};

export default display;

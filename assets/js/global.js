const API_URL = "https://api.github.com/users/";
const userDetails = document.querySelector("#userDetails");

getUserData = async (username) => {
  const response = await fetch(API_URL + username);
  const userData = await response.json();
  // console.log(userData);

  // console.log(response);
  // if (response.status === 404) {
  if (!response.ok) {
    userDetailsCard = `
    <div class="card_user_notfound">
      <img src="./assets/image/not_found.svg" alt="Not found" />
      <h1>User details not found</h1>
      <p>Please check the username and try again.</p>
    </div>
    `;
  } else {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const options = { day: "numeric", month: "long", year: "numeric" };
      return date.toLocaleDateString("en-GB", options);
    };
    const createdDate = userData.created_at;
    const formattedDate = formatDate(createdDate);

    const bioName = userData.name ? userData.name : "No public name";
    const bioText = userData.bio ? userData.bio : "This profile has no bio";
    const bioAddr = userData.location
      ? userData.location
      : "<span>Not Available</span>";
    const bioTwitter = userData.twitter_username
      ? userData.twitter_username
      : "<span>Not Available</span>";
    const bioBlogLink = userData.blog
      ? userData.blog
      : "<span>Not Available</span>";
    const bioCompany = userData.company
      ? userData.company
      : "<span>Not Available</span>";

    userDetailsCard = `
    <div class="card_user_image">
        <img
            src="${userData.avatar_url}"
            alt="User Image" />
    </div>
    <div class="card_user_info">
        <div class="card_user_info_header">
            <div>
                <h1 class="card_user_info_header_name">
                    ${bioName}
                </h1>
                <a
                  class="card_user_info_header_username"
                  href="${userData.html_url}"
                  >@${userData.login}</a
                >
            </div>
            <div>
              <p class="card_user_info_header_date">
                Joined <span>${formattedDate}</span>
              </p>
            </div>
        </div>
        <div class="card_user_info_bio">
          <p>${bioText}</p>
        </div>
        <div class="card_user_info_repo">
            <div>
                <h2>Repos</h2>
                <p>${userData.public_repos}</p>
            </div>
            <div>
                <h2>Followers</h2>
                <p>${userData.followers}</p>
            </div>
            <div>
                <h2>Followings</h2>
                <p>${userData.following}</p>
            </div>
            </div>
        <div class="card_user_info_details">
            <div>
                <i class="ri-map-pin-fill"></i>
                <p>${bioAddr}</p>
            </div>
            <div>
                <i class="ri-twitter-x-fill"></i>
                <p>${bioTwitter}</p>
            </div>
            <div>
                <i class="ri-links-fill"></i>
                <p>${bioBlogLink}</p>
            </div>
            <div>
                <i class="ri-building-fill"></i>
                <p>${bioCompany}</p>
            </div>
        </div>
    </div>
  `;
  }
  userDetails.innerHTML = userDetailsCard;
};

const formSubmit = () => {
  const searchInput = document.querySelector("#usrName");
  console.log(searchInput.value);
  if (searchInput.value != "") {
    getUserData(searchInput.value);
    searchInput.value = "";
  }
  return false;
};

console.log($);
let target_url =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=61ac51ab767a45229aaa509643a6c1f0";
let nyJob = "https://data.cityofnewyork.us/resource/kpav-sd4t.json";
let listing_container = [];
$.ajax({
  url: nyJob
}).then(data => {
  console.log(data);
  const doSomething = () => {
    console.log("insert form.");
  };
  for (i = 0; i < data.length; i += 10) {
    let job_listing = {
      name: data[i].business_title,
      salary:
        data[i].salary_range_from +
        " - " +
        data[i].salary_range_to +
        " Annually",
      location: data[i].work_location,
      description: data[i].job_description
    };
    console.log(job_listing.length);
    const find_submit = () => {
      let search_text = $(".nput").val();
      console.log(search_text);
      if (search_text === job_listing.name) {
        $(".listing").replaceWith(job_listing.name);
      }
    };
    $("body")
      .append(
        `<h3> ${job_listing.name}</h3>\n
      <h4>$ ${job_listing.salary}</h4>\n`
      )
      .addClass("listing");
  }
});

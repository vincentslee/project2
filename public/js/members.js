/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-position").text(data.position);
    $(".member-happiness").text(data.happiness);
    $(".member-state").text(data.state);
    $(".member-name").text(data.email);
  });
<<<<<<< HEAD
});
$.get("/api/city_data").then(data => {
  console.log(data);
  const cityDiv = document.getElementById("cityCard");
  for (let i = 0; i < 3; i++) {
    const cityInfo = document.createElement("tr");
    console.log(data[i]);
    $(cityInfo).html(
      `<td><strong> ${data[i].city}: </strong></td>
=======

  $.get("/api/city_data").then(data => {
    console.log(data);
    const cityDiv = document.getElementById("cityCard");
    for (let i = 0; i < 3; i++) {
      const cityInfo = document.createElement("tr");
      console.log(data[i]);
      $(cityInfo).html(

        `<td><strong> ${data[i].city}: </strong></td>
>>>>>>> master
        <td>${data[i].lifeQuality}</td>
        <td>${data[i].purchasingPower}</td>
        <td>${data[i].safety}</td>
        <td>${data[i].healthCare}</td>
        <td>${data[i].livingCost}</td>
        <td>${data[i].propToIncomeRatio}</td>
        <td>${data[i].traffic}</td>
        <td>${data[i].polution}</td>
        <td>${data[i].climate}</td>

        `
<<<<<<< HEAD
    );
    cityDiv.append(cityInfo);
  }
});

$.get("/api/country_data").then(data => {
  console.log(data);
  const cityDiv = document.getElementById("countryCard");
  for (let i = 0; i < 3; i++) {
    const cityInfo = document.createElement("tr");
    console.log(data[i]);
    $(cityInfo).html(
      `
        <td><strong> ${data[i].country}: </strong> </td>
        <td> ${data[i].score} </td>
        <td> ${data[i].gdp} </td>
        <td> ${data[i].socialSupport} </td>
        <td> ${data[i].lifeExpectancy} </td>
        <td> ${data[i].freedom} </td>
        <td> ${data[i].generosity} </td>
        <td> ${data[i].corruption} </td>
      `
    );
    cityDiv.append(cityInfo);
  }
=======
        
      );
      cityDiv.append(cityInfo);
    }
  });

  $.get("/api/country_data").then(data => {
    console.log(data);
    const cityDiv = document.getElementById("countryCard");
    for (let i = 0; i < 3; i++) {
      const cityInfo = document.createElement("tr");
      console.log(data[i]);
      $(cityInfo).html(
        `
          <td><strong> ${data[i].country}: </strong> </td>
          <td> Score: ${data[i].score} </td>
          <td> GDP: ${data[i].gdp} </td>
          <td> Social Support: ${data[i].socialSupport} </td>
          <td> Life Expectancy: ${data[i].lifeExpectancy} </td>
          <td> Freedom: ${data[i].freedom} </td>
          <td> Generosity: ${data[i].generosity} </td>
          <td> Corruption: ${data[i].corruption} </td>

        `
      );
      cityDiv.append(cityInfo);
    }
  });
>>>>>>> master
});

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  let currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
    let a,
      b,
      i,
      // eslint-disable-next-line prefer-const
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    // eslint-disable-next-line prefer-const
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      // eslint-disable-next-line eqeqeq
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        // eslint-disable-next-line no-unused-vars
        b.addEventListener("click", function(e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
    let x = document.getElementById(this.id + "autocomplete-list");
    if (x) {
      x = x.getElementsByTagName("div");
    }
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) {
          x[currentFocus].click();
        }
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) {
      return false;
    }
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) {
      currentFocus = 0;
    }
    if (currentFocus < 0) {
      currentFocus = x.length - 1;
    }
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    const x = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", e => {
    closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
const states = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];
/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), states);

document.getElementById(submitUserData);

submitUserInfo.on("click", event => {
  event.preventDefault();
  const userInfo = {
    lat: emailInput.val().trim(),
    long: passwordInput.val().trim()
  };
  updateUser(userInfo.lat, userInfo.long);
});

function updateUser(lat, long) {
  $.post("/api/geolocate", {
    lat: lat,
    long: long
  })
    .then(() => {
      window.location.replace("/members");
      // If there's an error, handle it by throwing up a bootstrap alert
    })
    .catch(err);
}

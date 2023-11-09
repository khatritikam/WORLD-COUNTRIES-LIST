const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
  
  let isSearchWithStart =  false;
  let searchAny = false;
  let countriesRow = document.getElementById('countries-boxes')
  let filterCountries = document.getElementById('filter-countries')
  let searchwithstartbtn = document.getElementById('startwith')
  let searchwithanybtn = document.getElementById('any')
  let reverselist = document.getElementById('revers')
  
  function bodyLoaded() {
    let countrieslang = countries.length
  // console.log(countrieslang)
    let totalCountries = document.getElementById('totalcountries')
    totalCountries.innerHTML = `total number of countries: ${countrieslang}`
    loadcountries(countries)
  }
  
  
  // On Seach Way Click
  function searchWay(way){
    
    if(way === 'start'){
      isSearchWithStart = true;
      searchAny = false
      searchwithanybtn.classList.add('btn-primary')
      searchwithanybtn.classList.remove('btn-info')
      searchwithstartbtn.classList.add('btn-info')
      searchwithstartbtn.classList.remove('btn-primary')
    }else if(way === 'any') {
      searchAny = true;
      isSearchWithStart = false;
      searchwithstartbtn.classList.add('btn-primary')
      searchwithstartbtn.classList.remove('btn-info')
      searchwithanybtn.classList.add('btn-info')
      searchwithanybtn.classList.remove('btn-primary')
  
    }
  }
  
  
  function loadcountries(countriesData) {
    countriesRow.innerHTML = ""
    for (let i = 0; i < countriesData.length; i++) {
      let countriesBox = document.createElement('div')
      countriesBox.classList.add('bg-image2')
      let innerBox = document.createElement('div')
      innerBox.classList.add('inner-div2')
      let countriesName = document.createElement('h6')
      countriesName.classList.add('text-white', 'text-uppercase', 'font-weight-bold')
      countriesName.innerHTML = countriesData[i]
      innerBox.appendChild(countriesName)
      countriesBox.appendChild(innerBox)
      countriesRow.appendChild(countriesBox)
      // console.log(countriesName)
    }
  }
  
  
  function revrseCountries(){
      searchAny = false;
      isSearchWithStart = false
      searchwithstartbtn.classList.add('btn-primary')
      searchwithstartbtn.classList.remove('btn-info')
      searchwithanybtn.classList.remove('btn-info')
      searchwithanybtn.classList.add('btn-primary')
      countriesRow.innerHTML = ""
      countries.reverse()
      loadcountries(countries)
  }
  
  
  function searchCountries(input){
    console.log(input)
    if(isSearchWithStart){
        countriesSrtatWith(input.value)
    }else if(searchAny){
      countriesCountainingAnyLallter(input.value)
    }
  }
  
  
  function countriesSrtatWith(letter){
      let filteredCountries = countries.filter((country) => {
        return country.toLocaleLowerCase().startsWith(letter)   
      } )    
      filterCountries.innerHTML = `countries start with ${letter} are ${filteredCountries.length}`
      loadcountries(filteredCountries)
  } 
  
  
  function countriesCountainingAnyLallter(latter){
      let filteredcountry =   countries.filter((val) =>{
        return val.toLocaleLowerCase().includes(latter)
      })
      filterCountries.innerHTML = `countries countaining ${latter} are ${filteredcountry.length}`
      loadcountries(filteredcountry)
  } 
  
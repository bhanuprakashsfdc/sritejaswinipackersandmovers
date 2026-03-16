// Raw list may contain duplicates; export a de-duplicated list for clean routing/UI
const rawCities = [
  // Andhra Pradesh
  "visakhapatnam", "vijayawada", "guntur", "nellore", "kurnool", "rajahmundry", "kadapa", "tirupati",
  "anantapur", "kakinada", "eluru", "ongole", "chittoor", "machilipatnam", "vizianagaram", "srikakulam",
  "bhimavaram", "madanapalle", "adoni", "tenali", "proddatur", "tadepalligudem", "dharmavaram", "gudivada",
  "narasaraopet", "tadipatri", "kavali", "nandyal", "chirala", "hindupur", "macherla", "markapur",
  "bapatla", "puttur", "samalkota", "guntakal", "ponnur", "palakollu", "tuni", "rayachoti",
  "gooty", "amalapuram", "nidadavole", "mandapeta", "piduguralla", "jaggaiahpet", "chintalapudi", "salur",
  "jaggayyapeta", "palasa", "kandukur", "tanuku", "sattenapalle", "parvathipuram", "nuzvid", "atmakur",
  "jammalamadugu", "vinukonda", "gudur", "sullurpeta", "venkatagiri", "ichchapuram", "rajampet", "mangalagiri",
  "yemmiganur", "bheemunipatnam", "pithapuram", "pulivendula", "mylavaram", "udayagiri", "punganur",
  "kothagudem", "naidupeta", "kadiri", "repalle", "dhone", "bobbili", "pedana", "mydukur", "giddalur",
  "gajapathinagaram", "pathapatnam", "tekkali", "nandigama", "penugonda", "rampachodavaram", "kanigiri",
  "kothapeta", "palamaner", "muddanur", "rayadurg", "pileru", "kalikiri", "banaganapalle", "parachur",
  "srikalahasti", "betamcherla", "rajanagaram", "anakapalle", "chagallu", "mummidivaram", "nagari",
  "nellimarla", "patancheru", "sompeta", "palakonda", "dwaraka tirumala", "gajuwaka", "payakaraopeta",
  "tallapudi", "yerraguntla", "ramachandrapuram", "narasapuram", "polavaram", "bheemili",
  "chilakaluripet", "mandasa", "kuppam", "ichapuram",

  // Major metros
  "mumbai", "delhi", "bengaluru", "hyderabad", "chennai", "kolkata", "pune", "ahmedabad", "jaipur", "surat",
  "lucknow", "kanpur", "nagpur", "indore", "bhopal", "patna", "ranchi", "raipur", "bhubaneswar", "cuttack",

  // Telangana
  "warangal", "karimnagar", "nizamabad", "khammam", "siddipet", "medak", "adilabad", "mancherial", "jagtial",
  "ramagundam", "mahbubnagar", "wanaparthy", "gadwal", "narayanpet", "nagarkurnool", "suryapet", "nalgonda",
  "miryalaguda", "kodad", "bhongir",

  // Tamil Nadu
  "coimbatore", "tiruppur", "erode", "salem", "namakkal", "karur", "tiruchirappalli", "thanjavur",
  "kumbakonam", "mayiladuthurai", "madurai", "dindigul", "theni", "sivakasi", "virudhunagar",
  "ramanathapuram", "paramakudi", "thoothukudi", "tirunelveli", "tenkasi", "vellore", "ranipet", "arcot",
  "katpadi", "ambur", "vaniyambadi", "hosur", "krishnagiri", "dharmapuri", "uddumalpet", "pollachi",
  "palani", "oddanchatram", "cuddalore", "chidambaram", "neyveli", "panruti", "virudhachalam",
  "villupuram", "kallakurichi",

  // Karnataka
  "mysuru", "mangaluru", "udupi", "manipal", "chikkamagaluru", "hassan", "tumakuru", "chitradurga",
  "davangere", "shivamogga", "hubballi", "dharwad", "belagavi", "bagalkot", "bijapur", "kalaburagi",
  "yadgir", "raichur", "koppal", "gadag", "hospet", "bellary", "sandur", "siruguppa", "bidar",
  "basavakalyan", "bhalki", "chincholi",

  // Kerala
  "kochi", "ernakulam", "thrissur", "palakkad", "malappuram", "kozhikode", "kannur", "kasaragod",
  "wayanad", "idukki", "trivandrum", "kollam", "pathanamthitta", "alappuzha", "kottayam", "muvattupuzha",
  "perumbavoor", "angamaly", "chalakudy", "irinjalakuda",

  // Maharashtra
  "thane", "navi mumbai", "kalyan", "dombivli", "ulhasnagar", "ambernath", "badlapur", "panvel", "karjat",
  "alibag", "satara", "sangli", "kolhapur", "solapur", "latur", "osmanabad", "beed", "parbhani", "hingoli",
  "nanded", "aurangabad", "jalna", "akola", "washim", "buldhana", "amravati", "wardha", "yavatmal",
  "chandrapur", "gadchiroli",

  // Gujarat
  "vadodara", "rajkot", "jamnagar", "junagadh", "bhavnagar", "surendranagar", "mehsana", "palanpur",
  "gandhinagar", "anand", "nadiad", "valsad", "navsari", "vapi", "porbandar", "morbi", "wankaner",
  "limbdi", "botad", "amreli",

  // Rajasthan
  "jodhpur", "udaipur", "ajmer", "pushkar", "bhilwara", "chittorgarh", "banswara", "dungarpur",
  "pratapgarh", "sirohi", "pali", "falna", "sumerpur", "barmer", "jaisalmer", "balotra", "jalore",
  "sanchor", "nagaur", "makrana",

  // Madhya Pradesh
  "gwalior", "jhansi", "sagar", "damoh", "satna", "rewa", "katni", "jabalpur", "hoshangabad", "itarsi",
  "sehore", "vidisha", "tikamgarh", "chhatarpur", "panna", "datia", "morena", "bhind", "sheopur",

  // Uttar Pradesh
  "noida", "greater noida", "ghaziabad", "meerut", "muzaffarnagar", "saharanpur", "aligarh", "mathura",
  "agra", "firozabad", "bareilly", "moradabad", "rampur", "shahjahanpur", "pilbhit", "lakhimpur",
  "sitapur", "hardoi", "unnao", "rae bareli", "varanasi", "prayagraj", "mirzapur", "sonbhadra",
  "jaunpur", "azamgarh", "ballia", "mau", "ghazipur", "chandauli",

  // West Bengal
  "howrah", "hooghly", "serampore", "chandannagar", "kharagpur", "medinipur", "haldia", "asansol",
  "durgapur", "siliguri", "jalpaiguri", "alipurduar", "cooch behar", "balurghat", "malda", "raiganj",
  "bongaon", "ranaghat", "krishnanagar", "berhampore",

  // Odisha
  "puri", "balasore", "baripada", "keonjhar", "angul", "dhenkanal", "sambalpur", "jharsuguda", "bargarh",
  "titlagarh", "balangir", "koraput", "jeypore", "rayagada", "nabarangpur", "malkangiri", "phulbani",
  "nayagarh", "kendrapara", "jagatsinghpur",

  // Assam & Northeast
  "guwahati", "silchar", "jorhat", "dibrugarh", "tinsukia", "tezpur", "nagaon", "diphu", "karimganj",
  "dhubri", "shillong", "tura", "aizawl", "lunglei", "kohima", "dimapur", "itanagar", "naharlagun",
  "pasighat", "roing",
];

// Ensure exported list is unique to prevent duplicate keys and routes
export const cities = Array.from(new Set(rawCities));

// Helper to generate slug from city name
export const cityToSlug = (city: string): string =>
  city.toLowerCase().replace(/\s+/g, "-");

// Helper to generate display name from slug
export const slugToCity = (slug: string): string =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

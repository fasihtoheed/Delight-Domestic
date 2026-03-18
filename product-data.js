window.products = [
  // KITCHEN
  {id:1,  category:"Kitchen",          brand:"Super Kinza",  name:"Double Burner Gas Cabinet Stove",         desc:"Stainless steel top, auto-ignition, cast iron grates, easy-clean surface.",        price:"Rs. 8,500",   oldPrice:"Rs. 11,000",  discount:"23% OFF", badge:"New",  warranty:"",  cod:true,  rating:4.8, emoji:"🍳", stock:10,
   specs:{"Burners":"2","Top Material":"Stainless Steel","Ignition":"Auto Ignition","Grates":"Cast Iron","Fuel Type":"Gas","Easy Clean":"Yes"}},

  {id:2,  category:"Kitchen",          brand:"Dawlance",     name:"Microwave Oven (DW-MD-4-N) 20L(700W)",    desc:"solo modes,Mechanical rotary controls, child lock.", price:"Rs. 24,500",  oldPrice:"",            discount:"",        badge:"",     warranty:"1 Year",  cod:true,  rating:4.5, emoji:"📦", stock:8,
   specs:{"Capacity":"20 Litres","Power":"700W","Control Type":"Mechanical Rotary","Modes":"Solo","Child Lock":"Yes","Color":"White"}},

  {id:3,  category:"Kitchen",          brand:"Kenwood",       name:"Blender 2in1(blender+juicer,grinder) 350W Blender ",         desc:"Stainless steel blades, 2-speed settings,bleder+juicer/grinder, 1.7L jar.",   price:"Rs. 12,900",  oldPrice:"Rs. 16,000",  discount:"19% OFF", badge:"Sale", warranty:"1 Year",  cod:true,  rating:4.6, emoji:"🥤", stock:15,
   specs:{"Power":"350W","Functions":"Blender + Juicer + Grinder","Speeds":"2","Jar Capacity":"1.7 Litres","Blades":"Stainless Steel","Self Cleaning":"Yes"}},

  {id:4,  category:"Kitchen",          brand:"Dawlence",  name:"Dry Iron(1000W)",               desc:"6Heat setting,Auto-trip,Thermostatic Pilot Lamp,Copper wire,Non-Stick Coated Sole Plate",                     price:"Rs. 5,200",   oldPrice:"Rs. 6,500",   discount:"20% OFF", badge:"Sale", warranty:"6 Month", cod:true,  rating:4.4, emoji:"🥘", stock:20,
   specs:{"Power":"1000W","Heat Settings":"6","Sole Plate":"Non-Stick Coated","Auto Trip":"Yes","Pilot Lamp":"Thermostatic","Wire":"Copper"}},

  {id:5,  category:"Kitchen",          brand:"Philips",      name:"Hand Blender+Egg beater 600W",                  desc:"2-speed settings,Whipper/egg beater, eject button, ergonomic grip.",                  price:"Rs. 6,800",   oldPrice:"",            discount:"",        badge:"New",  warranty:"1 Year",  cod:true,  rating:4.7, emoji:"🍰", stock:12,
   specs:{"Power":"600W","Speeds":"2","Attachments":"Blender + Egg Beater/Whipper","Eject Button":"Yes","Grip":"Ergonomic"}},

  {id:6,  category:"Kitchen",          brand:"Philips",        name:"Electric Kettle",     desc:"1.5L,Quick boil(60sec),2000W",          price:"Rs. 78,000",  oldPrice:"Rs. 92,000",  discount:"15% OFF", badge:"Hot",  warranty:"5 Year",  cod:false, rating:4.9, emoji:"❄️", stock:5,
   specs:{"Capacity":"1.5 Litres","Power":"2000W","Boil Time":"60 Seconds","Auto Shutoff":"Yes","Base":"360 Degree Swivel"}},

  {id:7,  category:"Kitchen",          brand:"Anex",     name:"Electric Kettle",              desc:"2.0L,Quick boil(60sec),2000W,(1Year Warranty)",              price:"Rs. 45,000",  oldPrice:"",            discount:"",        badge:"",     warranty:"2 Year",  cod:false, rating:4.6, emoji:"🧊", stock:7,
   specs:{"Capacity":"2.0 Litres","Power":"2000W","Boil Time":"60 Seconds","Auto Shutoff":"Yes","Base":"360 Degree Swivel"}},

  {id:8,  category:"Kitchen",          brand:"Silver Crest",     name:"2 Slice Bread Toaster",    desc:"Multifunctional 2 Slice Bread Toaster with Warming Rack 850 Watt",             price:"Rs. 38,500",  oldPrice:"Rs. 46,000",  discount:"16% OFF", badge:"Sale", warranty:"1 Year",  cod:false, rating:4.8, emoji:"🔥", stock:9,
   specs:{"Power":"850W","Slice Capacity":"2 Slices","Warming Rack":"Yes","Functions":"Toast + Warm","Cord Length":"Approx 70cm"}},

  {id:9,  category:"Kitchen",          brand:"Kenwood",      name:"Meat and Vegetable Chopper",           desc:"4 Stainless steel blades,Copper Motor,3Litre,700W",                 price:"Rs. 22,000",  oldPrice:"Rs. 27,000",  discount:"19% OFF", badge:"New",  warranty:"1 Year",  cod:true,  rating:4.8, emoji:"🍟", stock:11,
   specs:{"Power":"700W","Capacity":"3 Litres","Blades":"4 Stainless Steel","Motor":"Copper","Use":"Meat + Vegetables"}},

  {id:10, category:"Kitchen",          brand:"RAF", name:"Coffe Machine",             desc:"Multifunctional coffe grinder,300W,Energy efficent,Washable,Stainless steel baldes",          price:"Rs. 4,500",   oldPrice:"",            discount:"",        badge:"",     warranty:"1 Year",  cod:true,  rating:4.5, emoji:"☕", stock:6,
   specs:{"Power":"300W","Blades":"Stainless Steel","Washable":"Yes","Energy Efficient":"Yes","Function":"Coffee Grinder"}},

  {id:81, category:"Kitchen",          brand:"Dawlance",     name:"Microwave Oven (DW-MD-15) 20L(700W)",    desc:"solo modes,Mechanical rotary controls, child lock.", price:"Rs. 24,500",  oldPrice:"",            discount:"",        badge:"",     warranty:"1 Year",  cod:true,  rating:4.5, emoji:"📦", stock:8,
   specs:{"Capacity":"20 Litres","Power":"700W","Control Type":"Mechanical Rotary","Modes":"Solo","Child Lock":"Yes","Color":"White"}},

  // SUMMER MIX
  {id:11, category:"Summer Mix",       brand:"GFC",          name:"Pedestal Fan 18 inch Power Cool",  desc:"High-speed motor, 3-speed control, adjustable height, oscillation.",               price:"Rs. 7,200",   oldPrice:"Rs. 9,000",   discount:"20% OFF", badge:"Hot",  warranty:"1 Year",  cod:true,  rating:4.7, emoji:"🌀", stock:25,
   specs:{"Blade Size":"18 Inch","Speeds":"3","Height":"Adjustable","Oscillation":"Yes","Motor Type":"High Speed Copper"}},

  {id:12, category:"Summer Mix",       brand:"PEL",          name:"Inverter Split AC 1.5 Ton",        desc:"5-star energy rating, auto-clean, turbo cool, UV sterilization.",                  price:"Rs. 89,000",  oldPrice:"Rs. 110,000", discount:"19% OFF", badge:"Hot",  warranty:"5 Year",  cod:true,  rating:4.9, emoji:"❄️", stock:4,
   specs:{"Capacity":"1.5 Ton","Type":"Inverter Split","Energy Rating":"5 Star","Auto Clean":"Yes","Turbo Cool":"Yes","UV Sterilization":"Yes","Refrigerant":"R410A"}},

  {id:13, category:"Summer Mix",       brand:"Super Asia",   name:"Room Air Cooler 40L",              desc:"Honeycomb cooling pads, dual fan speed, large water tank, ice compartment.",       price:"Rs. 16,500",  oldPrice:"Rs. 20,000",  discount:"18% OFF", badge:"New",  warranty:"1 Year",  cod:true,  rating:4.5, emoji:"💨", stock:14,
   specs:{"Tank Capacity":"40 Litres","Cooling Pads":"Honeycomb","Fan Speeds":"Dual","Ice Compartment":"Yes","Type":"Air Cooler"}},

  {id:14, category:"Summer Mix",       brand:"Dawlance",     name:"Chest Freezer 10 CFT",             desc:"Fast freeze, recessed handle, interior light, foam insulated lid.",                price:"Rs. 38,000",  oldPrice:"Rs. 45,000",  discount:"16% OFF", badge:"Sale", warranty:"2 Year",  cod:false, rating:4.6, emoji:"🧊", stock:3,
   specs:{"Capacity":"10 CFT","Type":"Chest Freezer","Fast Freeze":"Yes","Interior Light":"Yes","Handle":"Recessed","Lid":"Foam Insulated"}},

  {id:15, category:"Summer Mix",       brand:"Orient",       name:"DC Inverter Ceiling Fan 56 inch",  desc:"Brushless DC motor, 70% energy saving, remote control, 5 speeds.",                price:"Rs. 18,500",  oldPrice:"Rs. 22,000",  discount:"16% OFF", badge:"New",  warranty:"3 Year",  cod:true,  rating:4.8, emoji:"🌬️", stock:18,
   specs:{"Blade Span":"56 Inch","Motor":"Brushless DC Inverter","Speeds":"5","Energy Saving":"70%","Remote Control":"Yes","Operation":"Silent"}},

  {id:16, category:"Summer Mix",       brand:"GFC",          name:"Table Fan 12 inch Breeze",         desc:"Copper wound motor, 3-speed settings, tilt adjustment, stable base.",              price:"Rs. 3,200",   oldPrice:"",            discount:"",        badge:"",     warranty:"2 Year",  cod:true,  rating:4.5, emoji:"🌀", stock:30,
   specs:{"Blade Size":"12 Inch","Motor":"Copper Wound","Speeds":"3","Tilt":"Adjustable","Base":"Stable"}},

  {id:17, category:"Summer Mix",       brand:"PEL",          name:"Window AC 1 Ton",                  desc:"Auto restart, sleep mode, dehumidify, fresh air intake, dust filter.",             price:"Rs. 58,000",  oldPrice:"Rs. 68,000",  discount:"15% OFF", badge:"Sale", warranty:"3 Year",  cod:false, rating:4.6, emoji:"❄️", stock:6,
   specs:{"Capacity":"1 Ton","Type":"Window AC","Auto Restart":"Yes","Sleep Mode":"Yes","Dehumidify":"Yes","Fresh Air Intake":"Yes","Dust Filter":"Yes"}},

  {id:18, category:"Summer Mix",       brand:"Pak Fans",     name:"Exhaust Fan 12 inch Kitchen",      desc:"Rust-proof body, copper motor, auto shutter, high-speed airflow.",                 price:"Rs. 2,800",   oldPrice:"",            discount:"",        badge:"",     warranty:"2 Year",  cod:true,  rating:4.4, emoji:"💨", stock:22,
   specs:{"Blade Size":"12 Inch","Body":"Rust Proof","Motor":"Copper","Auto Shutter":"Yes","Airflow":"High Speed"}},

  {id:19, category:"Summer Mix",       brand:"Orient",       name:"Tower Fan 42 inch Slim",           desc:"60 degree oscillation, 12-speed settings, remote control, 8hr timer.",             price:"Rs. 12,500",  oldPrice:"Rs. 15,000",  discount:"17% OFF", badge:"New",  warranty:"1 Year",  cod:true,  rating:4.6, emoji:"🌬️", stock:10,
   specs:{"Height":"42 Inch","Oscillation":"60 Degrees","Speeds":"12","Remote Control":"Yes","Timer":"8 Hour","Design":"Slim"}},

  {id:20, category:"Summer Mix",       brand:"Super Asia",   name:"Portable Air Cooler 20L",          desc:"Compact design, honeycomb pad, USB charging port, 3-speed.",                      price:"Rs. 9,800",   oldPrice:"Rs. 12,000",  discount:"18% OFF", badge:"Hot",  warranty:"1 Year",  cod:true,  rating:4.4, emoji:"💨", stock:16,
   specs:{"Tank Capacity":"20 Litres","Cooling Pads":"Honeycomb","Speeds":"3","USB Charging":"Yes","Design":"Portable Compact"}},

  // WASHING
  {id:21, category:"Washing",          brand:"Haier",        name:"Front Load Washer 8KG",            desc:"1400 RPM, 15 wash programs, steam care, auto-dosing detergent.",                  price:"Rs. 72,500",  oldPrice:"",            discount:"",        badge:"",     warranty:"2 Year",  cod:false, rating:4.7, emoji:"🫧", stock:5,
   specs:{"Load Capacity":"8 KG","Type":"Front Load","Spin Speed":"1400 RPM","Wash Programs":"15","Steam Care":"Yes","Auto Dosing":"Yes"}},

  {id:22, category:"Washing",          brand:"PEL",          name:"Top Load Washer 10KG Semi-Auto",   desc:"Stainless steel drum, twin-tub, lint filter, spin dry, soaking function.",        price:"Rs. 28,000",  oldPrice:"Rs. 34,000",  discount:"18% OFF", badge:"Sale", warranty:"2 Year",  cod:true,  rating:4.5, emoji:"🫧", stock:8,
   specs:{"Load Capacity":"10 KG","Type":"Semi Auto Top Load","Drum":"Stainless Steel","Tub":"Twin Tub","Lint Filter":"Yes","Spin Dry":"Yes","Soak Function":"Yes"}},

  {id:23, category:"Washing",          brand:"Samsung",      name:"Fully Auto Top Load 8KG",          desc:"Diamond drum, wobble technology, eco tub clean, child lock.",                     price:"Rs. 58,000",  oldPrice:"Rs. 68,000",  discount:"15% OFF", badge:"New",  warranty:"3 Year",  cod:false, rating:4.8, emoji:"🫧", stock:4,
   specs:{"Load Capacity":"8 KG","Type":"Fully Auto Top Load","Drum":"Diamond Drum","Technology":"Wobble","Eco Tub Clean":"Yes","Child Lock":"Yes"}},

  {id:24, category:"Washing",          brand:"Dawlance",     name:"Washing Machine 6KG Twin Tub",     desc:"Spin and wash tub, powerful motor, gentle wash cycle, timer control.",            price:"Rs. 22,000",  oldPrice:"",            discount:"",        badge:"",     warranty:"1 Year",  cod:true,  rating:4.4, emoji:"🫧", stock:12,
   specs:{"Load Capacity":"6 KG","Type":"Twin Tub","Tubs":"Wash + Spin","Wash Cycle":"Gentle","Timer Control":"Yes"}},

  {id:25, category:"Washing",          brand:"Haier",        name:"Front Load Washer 6KG Slim",       desc:"Slim 45cm depth, 1000 RPM, quick wash 15 mins, anti-crease.",                    price:"Rs. 55,000",  oldPrice:"Rs. 65,000",  discount:"15% OFF", badge:"Hot",  warranty:"2 Year",  cod:false, rating:4.6, emoji:"🫧", stock:3,
   specs:{"Load Capacity":"6 KG","Type":"Front Load Slim","Depth":"45 cm","Spin Speed":"1000 RPM","Quick Wash":"15 Minutes","Anti Crease":"Yes"}},

  {id:27, category:"Washing",          brand:"Super Asia",   name:"Dryer Machine 7KG Spin",           desc:"High-speed spin, stainless steel drum, overflow safety, delay timer.",            price:"Rs. 18,500",  oldPrice:"",            discount:"",        badge:"",     warranty:"1 Year",  cod:true,  rating:4.3, emoji:"💨", stock:7,
   specs:{"Capacity":"7 KG","Type":"Spin Dryer","Drum":"Stainless Steel","Spin Speed":"High","Overflow Safety":"Yes","Delay Timer":"Yes"}},

  {id:28, category:"Washing",          brand:"Orient",       name:"Fully Auto Front Load 7KG",        desc:"Inverter motor, 16 programs, anti-vibration, child lock, LED display.",           price:"Rs. 64,000",  oldPrice:"Rs. 76,000",  discount:"16% OFF", badge:"Sale", warranty:"3 Year",  cod:false, rating:4.7, emoji:"🫧", stock:5,
   specs:{"Load Capacity":"7 KG","Type":"Fully Auto Front Load","Motor":"Inverter","Programs":"16","Anti Vibration":"Yes","Child Lock":"Yes","Display":"LED"}},

  {id:29, category:"Washing",          brand:"Dawlance",     name:"Washing Machine 12KG Top Load",    desc:"Large family load, fuzzy logic control, auto restart, self-clean drum.",          price:"Rs. 42,000",  oldPrice:"Rs. 50,000",  discount:"16% OFF", badge:"Sale", warranty:"2 Year",  cod:true,  rating:4.5, emoji:"🫧", stock:6,
   specs:{"Load Capacity":"12 KG","Type":"Fully Auto Top Load","Control":"Fuzzy Logic","Auto Restart":"Yes","Self Clean Drum":"Yes"}},

  {id:30, category:"Washing",          brand:"Kenwood",      name:"Portable Washing Machine 3KG",     desc:"Mini washer for small loads, 2 wash modes, drain hose included.",                 price:"Rs. 9,800",   oldPrice:"",            discount:"",        badge:"New",  warranty:"1 Year",  cod:true,  rating:4.2, emoji:"🫧", stock:9,
   specs:{"Load Capacity":"3 KG","Type":"Portable Mini","Wash Modes":"2","Drain Hose":"Included","Design":"Compact Portable"}},

  // AUDIO & TV
  {id:31, category:"Audio",            brand:"Samsung",      name:"Crystal 4K UHD Smart TV 55 inch",  desc:"PurColor display, Crystal Processor 4K, built-in Alexa, SmartThings hub, HDR.",  price:"Rs. 145,000", oldPrice:"Rs. 175,000", discount:"17% OFF", badge:"New",  warranty:"1 Year",  cod:false, rating:4.8, emoji:"📺", stock:3,
   specs:{"Screen Size":"55 Inch","Resolution":"4K UHD","Processor":"Crystal 4K","Smart Assistant":"Alexa Built-in","HDR":"Yes","SmartThings":"Yes","Refresh Rate":"60Hz"}},

  {id:32, category:"Audio",            brand:"TCL",          name:"QLED 4K Smart TV 50 inch",         desc:"Quantum dot display, Dolby Vision, Google TV, 60Hz refresh rate.",               price:"Rs. 98,000",  oldPrice:"Rs. 118,000", discount:"17% OFF", badge:"Hot",  warranty:"1 Year",  cod:false, rating:4.7, emoji:"📺", stock:4,
   specs:{"Screen Size":"50 Inch","Resolution":"4K QLED","Display":"Quantum Dot","Dolby Vision":"Yes","OS":"Google TV","Refresh Rate":"60Hz"}},

  {id:33, category:"Audio",            brand:"Royal Fans",         name:"Bravia 43 inch Full HD Smart TV",  desc:"X-Reality PRO, Android TV, built-in Chromecast, X-Protection PRO.",             price:"Rs. 82,000",  oldPrice:"",            discount:"",        badge:"",     warranty:"1 Year",  cod:false, rating:4.8, emoji:"📺", stock:2,
   specs:{"Screen Size":"43 Inch","Resolution":"Full HD","Processor":"X-Reality PRO","OS":"Android TV","Chromecast":"Built-in","X-Protection PRO":"Yes"}},

  {id:34, category:"Audio",            brand:"JBL",          name:"Soundbar 2.1 with Subwoofer",      desc:"300W power, Dolby Atmos, HDMI ARC, Bluetooth 5.0, wall-mountable.",             price:"Rs. 38,000",  oldPrice:"Rs. 46,000",  discount:"17% OFF", badge:"New",  warranty:"1 Year",  cod:true,  rating:4.9, emoji:"🔊", stock:6,
   specs:{"Total Power":"300W","Configuration":"2.1","Dolby Atmos":"Yes","HDMI ARC":"Yes","Bluetooth":"5.0","Wall Mountable":"Yes"}},

  {id:35, category:"Audio",            brand:"Royal Fans",         name:"Home Theatre System 5.1 1000W",    desc:"1000W output, HDMI, Bluetooth, USB, FM radio, karaoke, Dolby Digital.",         price:"Rs. 52,000",  oldPrice:"Rs. 62,000",  discount:"16% OFF", badge:"Sale", warranty:"1 Year",  cod:false, rating:4.7, emoji:"🔊", stock:3,
   specs:{"Total Power":"1000W","Configuration":"5.1","HDMI":"Yes","Bluetooth":"Yes","USB":"Yes","FM Radio":"Yes","Karaoke":"Yes","Dolby Digital":"Yes"}},

  {id:36, category:"Audio",            brand:"Anker",        name:"Portable Bluetooth Speaker",       desc:"360 degree sound, IPX7 waterproof, 24hr battery, BassUp technology.",           price:"Rs. 12,500",  oldPrice:"",            discount:"",        badge:"New",  warranty:"1 Year",  cod:true,  rating:4.8, emoji:"🎵", stock:15,
   specs:{"Sound":"360 Degree","Waterproof Rating":"IPX7","Battery Life":"24 Hours","Technology":"BassUp","Connectivity":"Bluetooth","Type":"Portable"}},

  {id:37, category:"Audio",            brand:"Samsung",      name:"QLED 8K 65 inch Smart TV",         desc:"8K AI upscaling, Quantum HDR 32X, Neural Quantum Processor 8K.",                price:"Rs. 380,000", oldPrice:"Rs. 430,000", discount:"12% OFF", badge:"Hot",  warranty:"1 Year",  cod:false, rating:4.9, emoji:"📺", stock:1,
   specs:{"Screen Size":"65 Inch","Resolution":"8K QLED","Processor":"Neural Quantum 8K","AI Upscaling":"Yes","Quantum HDR":"32X"}},

  {id:39, category:"Audio",            brand:"Haier",        name:"LED TV 32 inch HD Smart Android",  desc:"Android 9 OS, Google Assistant, HDMI x2, built-in WiFi, voice control.",        price:"Rs. 38,000",  oldPrice:"Rs. 45,000",  discount:"16% OFF", badge:"Sale", warranty:"1 Year",  cod:true,  rating:4.5, emoji:"📺", stock:8,
   specs:{"Screen Size":"32 Inch","Resolution":"HD","OS":"Android 9","Google Assistant":"Yes","HDMI Ports":"2","WiFi":"Built-in","Voice Control":"Yes"}},

  {id:40, category:"Audio",            brand:"Bose",         name:"Wireless Headphones Noise Cancel", desc:"QuietComfort technology, 24hr battery, Aware mode, foldable, Bluetooth 5.1.",   price:"Rs. 45,000",  oldPrice:"",            discount:"",        badge:"",     warranty:"1 Year",  cod:true,  rating:4.9, emoji:"🎧", stock:5,
   specs:{"Type":"Over Ear Wireless","Noise Cancellation":"QuietComfort","Battery Life":"24 Hours","Aware Mode":"Yes","Foldable":"Yes","Bluetooth":"5.1"}},

  // WINTER MIX
  {id:41, category:"Winter Mix",       brand:"Cannon",       name:"Electric Water Heater 30L",        desc:"Fast heating, anti-rust tank, safety valve, energy saving thermostat.",          price:"Rs. 14,500",  oldPrice:"Rs. 18,000",  discount:"19% OFF", badge:"Hot",  warranty:"2 Year",  cod:true,  rating:4.7, emoji:"🚿", stock:10,
   specs:{"Capacity":"30 Litres","Type":"Electric Storage","Tank":"Anti Rust","Safety Valve":"Yes","Thermostat":"Energy Saving","Heating":"Fast"}},

  {id:42, category:"Winter Mix",       brand:"Nasgas",       name:"Instant Gas Geyser 12L",           desc:"Electronic ignition, overheating protection, copper heat exchanger.",            price:"Rs. 9,800",   oldPrice:"Rs. 12,000",  discount:"18% OFF", badge:"Sale", warranty:"1 Year",  cod:true,  rating:4.5, emoji:"🔥", stock:12,
   specs:{"Capacity":"12 Litres","Type":"Instant Gas","Ignition":"Electronic","Overheat Protection":"Yes","Heat Exchanger":"Copper"}},

  {id:43, category:"Winter Mix",       brand:"Philips",      name:"Oil Filled Radiator 2000W",        desc:"9 fins, 3 heat settings, thermostat, overheat protection, timer.",              price:"Rs. 18,500",  oldPrice:"Rs. 22,000",  discount:"16% OFF", badge:"New",  warranty:"2 Year",  cod:true,  rating:4.6, emoji:"♨️", stock:7,
   specs:{"Power":"2000W","Fins":"9","Heat Settings":"3","Thermostat":"Yes","Overheat Protection":"Yes","Timer":"Yes","Type":"Oil Filled"}},

  {id:44, category:"Winter Mix",       brand:"Osaka",        name:"Quartz Heater 2000W",              desc:"Instant heat, 2 heat settings, safety tip-over switch, cool-touch cabinet.",    price:"Rs. 4,800",   oldPrice:"Rs. 6,000",   discount:"20% OFF", badge:"Sale", warranty:"1 Year",  cod:true,  rating:4.3, emoji:"🔆", stock:14,
   specs:{"Power":"2000W","Heat Settings":"2","Instant Heat":"Yes","Tip Over Switch":"Yes","Cool Touch Cabinet":"Yes","Type":"Quartz"}},

  {id:45, category:"Winter Mix",       brand:"Dawlance",     name:"Chest Freezer 15 CFT Deep Freeze", desc:"R600a eco refrigerant, fast freeze, secure lock, foam insulated lid.",          price:"Rs. 52,000",  oldPrice:"",            discount:"",        badge:"",     warranty:"2 Year",  cod:false, rating:4.6, emoji:"🧊", stock:4,
   specs:{"Capacity":"15 CFT","Type":"Chest Freezer","Refrigerant":"R600a Eco","Fast Freeze":"Yes","Lock":"Secure","Lid":"Foam Insulated"}},

  {id:46, category:"Winter Mix",       brand:"Panasonic",    name:"Fan Heater 2000W Ceramic",         desc:"PTC ceramic element, 2 heat settings, cool air mode, tip-over protection.",     price:"Rs. 7,500",   oldPrice:"Rs. 9,500",   discount:"21% OFF", badge:"New",  warranty:"1 Year",  cod:true,  rating:4.5, emoji:"♨️", stock:9,
   specs:{"Power":"2000W","Element":"PTC Ceramic","Heat Settings":"2","Cool Air Mode":"Yes","Tip Over Protection":"Yes","Type":"Fan Heater"}},

  {id:47, category:"Winter Mix",       brand:"Cannon",       name:"Electric Geyser 50L Storage",      desc:"Magnesium anode, pressure relief valve, digital temp display.",                 price:"Rs. 24,000",  oldPrice:"Rs. 29,000",  discount:"17% OFF", badge:"Hot",  warranty:"3 Year",  cod:false, rating:4.8, emoji:"🚿", stock:6,
   specs:{"Capacity":"50 Litres","Type":"Electric Storage","Anode":"Magnesium","Pressure Relief Valve":"Yes","Display":"Digital Temperature"}},

  {id:48, category:"Winter Mix",       brand:"Nasgas",       name:"Gas Heater Room Double Burner",    desc:"Cast iron burners, oxygen depletion sensor, piezo ignition, wheels.",           price:"Rs. 12,500",  oldPrice:"",            discount:"",        badge:"",     warranty:"1 Year",  cod:true,  rating:4.4, emoji:"🔥", stock:8,
   specs:{"Burners":"Double","Burner Material":"Cast Iron","ODS Sensor":"Yes","Ignition":"Piezo","Wheels":"Yes","Fuel":"Gas"}},

  {id:49, category:"Winter Mix",       brand:"Philips",      name:"Electric Blanket Double Bed",      desc:"10 heat settings, machine washable, auto shut-off, dual zone control.",         price:"Rs. 8,900",   oldPrice:"Rs. 11,000",  discount:"19% OFF", badge:"New",  warranty:"1 Year",  cod:true,  rating:4.6, emoji:"🛏️", stock:11,
   specs:{"Size":"Double Bed","Heat Settings":"10","Machine Washable":"Yes","Auto Shutoff":"Yes","Zones":"Dual Zone Control"}},

  {id:50, category:"Winter Mix",       brand:"Orient",       name:"Halogen Heater 1200W Freestand",   desc:"3 halogen tubes, 3 heat levels, tip-over safety, carry handle.",               price:"Rs. 5,200",   oldPrice:"Rs. 6,500",   discount:"20% OFF", badge:"Sale", warranty:"1 Year",  cod:true,  rating:4.2, emoji:"💡", stock:13,
   specs:{"Power":"1200W","Tubes":"3 Halogen","Heat Levels":"3","Tip Over Safety":"Yes","Carry Handle":"Yes","Type":"Freestanding"}},

  // FANS
  {id:51, category:"Fans",             brand:"GFC",          name:"Ceiling Fan 56 inch Premium",      desc:"Copper wound motor, 3-speed, high air delivery, anti-rust coating.",            price:"Rs. 6,800",   oldPrice:"Rs. 8,500",   discount:"20% OFF", badge:"Hot",  warranty:"2 Year",  cod:true,  rating:4.8, emoji:"🌀", stock:20,
   specs:{"Blade Span":"56 Inch","Motor":"Copper Wound","Speeds":"3","Air Delivery":"High","Coating":"Anti Rust"}},

  {id:52, category:"Fans",             brand:"Pak Fans",     name:"Pedestal Fan 18 inch Super Breeze",desc:"Powerful motor, adjustable height and tilt, 3-speed, oscillation.",            price:"Rs. 7,500",   oldPrice:"",            discount:"",        badge:"",     warranty:"2 Year",  cod:true,  rating:4.6, emoji:"🌀", stock:18,
   specs:{"Blade Size":"18 Inch","Speeds":"3","Height":"Adjustable","Tilt":"Adjustable","Oscillation":"Yes"}},

  {id:53, category:"Fans",             brand:"Orient",       name:"DC Inverter Ceiling Fan 56 inch",  desc:"70% energy saving, BLDC motor, remote, 5-speed, silent operation.",            price:"Rs. 18,500",  oldPrice:"Rs. 22,000",  discount:"16% OFF", badge:"New",  warranty:"3 Year",  cod:true,  rating:4.9, emoji:"🌬️", stock:15,
   specs:{"Blade Span":"56 Inch","Motor":"BLDC Inverter","Speeds":"5","Energy Saving":"70%","Remote Control":"Yes","Operation":"Silent"}},

  {id:54, category:"Fans",             brand:"GFC",          name:"Bracket Fan 14 inch Wall Mount",   desc:"Space-saving wall mount, 3-speed, oscillating, copper motor.",                  price:"Rs. 4,200",   oldPrice:"Rs. 5,500",   discount:"24% OFF", badge:"Sale", warranty:"2 Year",  cod:true,  rating:4.5, emoji:"🌀", stock:22,
   specs:{"Blade Size":"14 Inch","Mount Type":"Wall Bracket","Motor":"Copper","Speeds":"3","Oscillation":"Yes"}},

  {id:55, category:"Fans",             brand:"Sunbeam",      name:"Table Fan 12 inch Desk",           desc:"360 degree rotation, quiet operation, 3-speed, compact for desk or bedside.",   price:"Rs. 3,800",   oldPrice:"",            discount:"",        badge:"",     warranty:"1 Year",  cod:true,  rating:4.4, emoji:"🌀", stock:25,
   specs:{"Blade Size":"12 Inch","Rotation":"360 Degree","Speeds":"3","Operation":"Quiet","Design":"Compact Desk"}},

  {id:56, category:"Fans",             brand:"Pak Fans",     name:"Exhaust Fan 12 inch Ventilation",  desc:"Rust-proof ABS blades, auto shutter, copper motor, 1450 RPM.",                 price:"Rs. 2,600",   oldPrice:"",            discount:"",        badge:"",     warranty:"2 Year",  cod:true,  rating:4.3, emoji:"💨", stock:30,
   specs:{"Blade Size":"12 Inch","Blades":"Rust Proof ABS","Motor":"Copper","RPM":"1450","Auto Shutter":"Yes"}},

  {id:57, category:"Fans",             brand:"GFC",          name:"Ceiling Fan 48 inch Economy",      desc:"Energy-saving design, robust copper motor, 3-speed, rust-free finish.",         price:"Rs. 4,900",   oldPrice:"Rs. 6,200",   discount:"21% OFF", badge:"Sale", warranty:"2 Year",  cod:true,  rating:4.6, emoji:"🌀", stock:17,
   specs:{"Blade Span":"48 Inch","Motor":"Copper","Speeds":"3","Finish":"Rust Free","Design":"Energy Saving"}},

  {id:58, category:"Fans",             brand:"Orient",       name:"Tower Fan 44 inch Digital",        desc:"12-speed, sleep mode, 8hr timer, 75 degree oscillation, remote, LED display.",  price:"Rs. 14,500",  oldPrice:"Rs. 17,000",  discount:"15% OFF", badge:"New",  warranty:"1 Year",  cod:true,  rating:4.7, emoji:"🌬️", stock:12,
   specs:{"Height":"44 Inch","Speeds":"12","Sleep Mode":"Yes","Timer":"8 Hour","Oscillation":"75 Degrees","Remote":"Yes","Display":"LED"}},

  {id:59, category:"Fans",             brand:"Crescent",     name:"Decorative Ceiling Fan 56 inch",   desc:"Designer blades, remote control, 3-speed, LED light kit included.",             price:"Rs. 9,800",   oldPrice:"Rs. 12,000",  discount:"18% OFF", badge:"Hot",  warranty:"2 Year",  cod:true,  rating:4.7, emoji:"🌀", stock:10,
   specs:{"Blade Span":"56 Inch","Blades":"Designer","Remote Control":"Yes","Speeds":"3","LED Light Kit":"Included"}},

  {id:60, category:"Fans",             brand:"Pak Fans",     name:"Exhaust Fan 9 inch Slim",          desc:"Ultra-slim profile, silent motor, auto shutter, ABS blade.",                   price:"Rs. 1,900",   oldPrice:"",            discount:"",        badge:"",     warranty:"1 Year",  cod:true,  rating:4.2, emoji:"💨", stock:28,
   specs:{"Blade Size":"9 Inch","Profile":"Ultra Slim","Motor":"Silent","Auto Shutter":"Yes","Blade Material":"ABS"}},

  // FURNITURE
  {id:61, category:"Furniture",        brand:"Interwood",    name:"Sofa Set 5-Seater L-Shape",        desc:"Premium fabric upholstery, solid wood frame, high-density foam, removable covers.",price:"Rs. 85,000",  oldPrice:"Rs. 105,000", discount:"19% OFF", badge:"New",  warranty:"1 Year",  cod:false, rating:4.8, emoji:"🛋️", stock:3,
   specs:{"Seating":"5 Seater","Shape":"L-Shape","Upholstery":"Premium Fabric","Frame":"Solid Wood","Foam":"High Density","Covers":"Removable"}},

  {id:62, category:"Furniture",        brand:"Master",       name:"King Size Bed with Headboard",     desc:"Solid sheesham wood, lacquer finish, slat support, elegant design.",             price:"Rs. 48,000",  oldPrice:"Rs. 60,000",  discount:"20% OFF", badge:"Sale", warranty:"1 Year",  cod:false, rating:4.7, emoji:"🛏️", stock:2,
   specs:{"Size":"King Size","Material":"Solid Sheesham Wood","Finish":"Lacquer","Support":"Slat","Headboard":"Included"}},

  {id:63, category:"Furniture",        brand:"Workspace",    name:"Ergonomic Office Chair Mesh",      desc:"Lumbar support, adjustable height and armrests, breathable mesh, 360 swivel.",  price:"Rs. 18,500",  oldPrice:"Rs. 24,000",  discount:"23% OFF", badge:"Hot",  warranty:"1 Year",  cod:true,  rating:4.6, emoji:"🪑", stock:7,
   specs:{"Type":"Office Chair","Back":"Breathable Mesh","Lumbar Support":"Yes","Height":"Adjustable","Armrests":"Adjustable","Swivel":"360 Degree"}},

  {id:64, category:"Furniture",        brand:"Interwood",    name:"Dining Table 6-Seater",            desc:"Solid wood top, metal legs, scratch-resistant finish, easy clean.",             price:"Rs. 35,000",  oldPrice:"Rs. 42,000",  discount:"17% OFF", badge:"New",  warranty:"1 Year",  cod:false, rating:4.7, emoji:"🍽️", stock:4,
   specs:{"Seating":"6 Persons","Top":"Solid Wood","Legs":"Metal","Finish":"Scratch Resistant","Easy Clean":"Yes"}},

  {id:65, category:"Furniture",        brand:"Master",       name:"Wardrobe 3-Door Sliding Mirror",   desc:"Mirrored sliding doors, 3 compartments, hanging rail, shelves.",               price:"Rs. 42,000",  oldPrice:"Rs. 52,000",  discount:"19% OFF", badge:"Sale", warranty:"1 Year",  cod:false, rating:4.5, emoji:"🚪", stock:3,
   specs:{"Doors":"3 Sliding","Door Type":"Mirrored","Compartments":"3","Hanging Rail":"Yes","Shelves":"Yes"}},

  {id:66, category:"Furniture",        brand:"Workspace",    name:"Study Desk with Bookshelf",        desc:"L-shaped design, built-in shelving, cable management, sturdy metal frame.",     price:"Rs. 14,500",  oldPrice:"Rs. 18,000",  discount:"19% OFF", badge:"New",  warranty:"1 Year",  cod:true,  rating:4.6, emoji:"📚", stock:6,
   specs:{"Shape":"L-Shape","Shelving":"Built-in","Cable Management":"Yes","Frame":"Sturdy Metal"}},

  {id:67, category:"Furniture",        brand:"Interwood",    name:"Center Table Glass Top",           desc:"Tempered glass top, chrome-finish steel frame, lower shelf.",                  price:"Rs. 12,000",  oldPrice:"",            discount:"",        badge:"",     warranty:"6 Month", cod:true,  rating:4.4, emoji:"🔲", stock:8,
   specs:{"Top":"Tempered Glass","Frame":"Chrome Finish Steel","Lower Shelf":"Yes"}},

  {id:68, category:"Furniture",        brand:"Master",       name:"Kids Bunk Bed with Ladder",        desc:"Solid wood, safety rails, space-saving, fits standard mattress.",              price:"Rs. 28,000",  oldPrice:"Rs. 35,000",  discount:"20% OFF", badge:"Hot",  warranty:"1 Year",  cod:false, rating:4.8, emoji:"🛏️", stock:2,
   specs:{"Type":"Bunk Bed","Material":"Solid Wood","Safety Rails":"Yes","Ladder":"Included","Mattress Fit":"Standard Size"}},

  {id:69, category:"Furniture",        brand:"Workspace",    name:"Bookshelf 5-Tier Display Unit",    desc:"Open display design, MDF shelves, metal frame, holds 50kg per shelf.",         price:"Rs. 9,500",   oldPrice:"Rs. 12,000",  discount:"21% OFF", badge:"Sale", warranty:"1 Year",  cod:true,  rating:4.5, emoji:"📚", stock:9,
   specs:{"Tiers":"5","Design":"Open Display","Shelves":"MDF","Frame":"Metal","Load Per Shelf":"50 KG"}},

  {id:70, category:"Furniture",        brand:"Interwood",    name:"TV Console Cabinet 60 inch",       desc:"Cable management holes, 2 drawers, open shelves, fits TVs up to 65 inch.",     price:"Rs. 22,000",  oldPrice:"Rs. 27,000",  discount:"19% OFF", badge:"New",  warranty:"1 Year",  cod:true,  rating:4.6, emoji:"📺", stock:5,
   specs:{"Width":"60 Inch","TV Fit":"Up to 65 Inch","Drawers":"2","Open Shelves":"Yes","Cable Management":"Yes"}},

  // HOUSE ESSENTIALS
  {id:71, category:"House Essentials", brand:"Philips",      name:"LED Bulb Pack of 6 9W",            desc:"Energy-saving LED, 800 lumen, warm white 3000K, 15000hr lifespan, E27 base.",   price:"Rs. 1,200",   oldPrice:"Rs. 1,800",   discount:"33% OFF", badge:"Hot",  warranty:"1 Year",  cod:true,  rating:4.9, emoji:"💡", stock:50,
   specs:{"Power":"9W","Pack":"6 Bulbs","Lumens":"800","Color Temp":"3000K Warm White","Lifespan":"15000 Hours","Base":"E27","Type":"LED"}},

  {id:72, category:"House Essentials", brand:"3M",           name:"Multipurpose Hooks Damage-Free",   desc:"Holds up to 3kg, no drilling, removes cleanly, waterproof, pack of 10.",        price:"Rs. 950",     oldPrice:"",            discount:"",        badge:"New",  warranty:"",        cod:true,  rating:4.7, emoji:"🪝", stock:40,
   specs:{"Pack":"10 Hooks","Max Load":"3 KG per Hook","Drilling":"Not Required","Removable":"Yes — Clean Removal","Waterproof":"Yes"}},

  {id:73, category:"House Essentials", brand:"Kenwood",      name:"Vacuum Cleaner 2000W Bagless",     desc:"HEPA filter, 2L dust cup, telescopic handle, 4 attachments, 5m cord.",         price:"Rs. 16,500",  oldPrice:"Rs. 21,000",  discount:"21% OFF", badge:"Sale", warranty:"1 Year",  cod:true,  rating:4.6, emoji:"🧹", stock:8,
   specs:{"Power":"2000W","Type":"Bagless","Filter":"HEPA","Dust Cup":"2 Litres","Handle":"Telescopic","Attachments":"4","Cord Length":"5 Metres"}},

  {id:74, category:"House Essentials", brand:"Milton",       name:"Water Dispenser Hot and Cold",     desc:"Dual tap hot/cold, stainless steel tank, safety valve, child lock hot tap.",    price:"Rs. 14,000",  oldPrice:"Rs. 17,500",  discount:"20% OFF", badge:"New",  warranty:"1 Year",  cod:true,  rating:4.5, emoji:"🚰", stock:10,
   specs:{"Taps":"Hot + Cold","Tank":"Stainless Steel","Safety Valve":"Yes","Child Lock":"Hot Tap","Type":"Tabletop Dispenser"}},

  {id:75, category:"House Essentials", brand:"Anex",         name:"Steam Iron 2400W Ceramic",         desc:"Ceramic soleplate, variable steam, self-cleaning, anti-drip, 300ml tank.",     price:"Rs. 3,800",   oldPrice:"Rs. 5,000",   discount:"24% OFF", badge:"Sale", warranty:"1 Year",  cod:true,  rating:4.7, emoji:"👔", stock:18,
   specs:{"Power":"2400W","Sole Plate":"Ceramic","Steam":"Variable","Self Cleaning":"Yes","Anti Drip":"Yes","Water Tank":"300ml"}},

  {id:76, category:"House Essentials", brand:"Philips",      name:"Air Purifier HEPA 3-Stage",        desc:"True HEPA + carbon + pre-filter, covers 300 sq ft, AQI display, sleep mode.",  price:"Rs. 28,000",  oldPrice:"Rs. 35,000",  discount:"20% OFF", badge:"New",  warranty:"1 Year",  cod:false, rating:4.8, emoji:"🌿", stock:5,
   specs:{"Filter Stages":"3","Filters":"True HEPA + Carbon + Pre-filter","Coverage":"300 Sq Ft","AQI Display":"Yes","Sleep Mode":"Yes"}},

  {id:77, category:"House Essentials", brand:"Anex",         name:"Food Steamer 3-Tier 9L",           desc:"9L capacity, 3 stackable baskets, 60min timer, boil-dry protection, 800W.",    price:"Rs. 5,500",   oldPrice:"",            discount:"",        badge:"",     warranty:"1 Year",  cod:true,  rating:4.5, emoji:"🥦", stock:12,
   specs:{"Power":"800W","Capacity":"9 Litres","Tiers":"3 Stackable Baskets","Timer":"60 Minutes","Boil Dry Protection":"Yes"}},

  {id:78, category:"House Essentials", brand:"Milton",       name:"Stainless Steel Flask 1L",         desc:"Double-wall insulation, hot 24hr/cold 48hr, leak-proof lid, BPA-free.",        price:"Rs. 2,200",   oldPrice:"Rs. 3,000",   discount:"27% OFF", badge:"Hot",  warranty:"6 Month", cod:true,  rating:4.8, emoji:"🫙", stock:25,
   specs:{"Capacity":"1 Litre","Material":"Stainless Steel","Insulation":"Double Wall","Hot Retention":"24 Hours","Cold Retention":"48 Hours","Lid":"Leak Proof","BPA Free":"Yes"}},

  {id:79, category:"House Essentials", brand:"Kenwood",      name:"Spin Mop and Bucket Set 360",      desc:"360 spinning mop, easy-wring pedal bucket, microfibre mop head, 10L bucket.", price:"Rs. 4,200",   oldPrice:"Rs. 5,500",   discount:"24% OFF", badge:"Sale", warranty:"",        cod:true,  rating:4.6, emoji:"🧺", stock:15,
   specs:{"Mop Type":"360 Spin","Wring Method":"Foot Pedal","Mop Head":"Microfibre","Bucket Capacity":"10 Litres"}},

  {id:80, category:"House Essentials", brand:"Philips",      name:"Mosquito Killer Lamp UV",          desc:"UV LED attraction, no chemicals, silent operation, 20sqm coverage.",           price:"Rs. 3,500",   oldPrice:"Rs. 4,500",   discount:"22% OFF", badge:"New",  warranty:"1 Year",  cod:true,  rating:4.7, emoji:"🔆", stock:20,
   specs:{"Type":"UV LED Trap","Chemicals":"None","Operation":"Silent","Coverage":"20 Sq Metres"}}
];
window.FEATURED_IDS = [2, 12, 21, 31, 46, 51, 62, 74];

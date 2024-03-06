import { Link, useParams } from "react-router-dom";
import "./ProductPage.css";
import { useEffect, useState } from 'react';

const Singleproduct = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    const [itemData, setItemData] = useState({});
    const { id } = useParams();

    const dataList = [
        {
          id: 1,
          ProductName: "Groundnut Kernels",
          BotanicalName: "Curcuma longaArachis hypogea",
          Origin: "India",
          Colour: "white",
          Usage: "Covetional",
          Purity: "100%",
          Availability: "BOLD , JAVA , TJ",
          Count:"35/40 , 38/42 , 40/50 , 50/60 , 60/70 , 80/90",
          Selflife: "2 years",
          Labling: "As Per Buyer's Requirement",
          Pakining: " PP / JUTE / VACUUM / BOX",
          image: [
            "https://img.freepik.com/free-photo/top-view-peanuts-concept_23-2148431029.jpg?t=st=1709640638~exp=1709644238~hmac=53753b8aaec58bbd74fb5a07779155f0d80b2c887dadc97a14a8954439bb7add&w=740",
            "https://img.freepik.com/free-photo/common-food-that-can-cause-allergic-reactions-people_23-2149870597.jpg?t=st=1709640697~exp=1709644297~hmac=fed632858e06e15185a8816cd04e648ae712a8882aa5b1d6ff796d2f4866f061&w=360",
            "https://img.freepik.com/free-photo/top-view-peanuts-texture-horizontal_176474-4257.jpg?t=st=1709640803~exp=1709644403~hmac=4159b1b1a1ad8ed89ec23c65a1bd89064a29ff2f12ea279cc5344fcb6a9cbaf4&w=740",
          ],
    
          Description:
            "Groundnut kernels, also known as peanuts, are nutritious legumes harvested from the Arachis hypogaea plant. These small, oval-shaped kernels are packed with essential nutrients, making them a popular snack and ingredient in various cuisines worldwide.",
          CommonUses: [
            "Peanut Kernels Usually Eaten As Is, By Cracking Them With Firm Pressure Between Fingers Or Using Clippers Or Nutcracker Machine. The Nut Can Be Also Be Enjoyed Salted Nuts, Confectionary, Bakery, Sweets Chocolates, Etc..",
            "Peanut Butter Is A Food-Paste Made From Ground-Roasted Nuts, With Or Without Addition Of Oil. It Is Popular Throughout The World And Commonly Used As Dip’s Spread. Peanut-Milk Is Also A Popular Lactose Free Milk Like Healthy Drink.",
            "Roasted And Crushed Kernels Are Often Sprinkled Over Salads, Desserts, Particularly Sundaes And Other Ice Cream Based Preparations.",
            "Peanut “Chutney” Or Paste, Made From These Nuts, chilly Peppers, Salt, Coriander Leaves, Garlic And Mustard Seeds, Is A Popular Dish Among South Indian, Sri Lanka Region.",
          ],
          Benifits: [
            "The High Fiber Content Of Simple And Complex Unsaturated Fatty Acids Play An Important Role In Reducing Blood Cholesterol.",
            "Peanut Contains More Protein Than A Piece Of Chicken The Same Weight. It Is Therefore Particularly Nutritious For Vegetarians. In Addition It Contains Many Vitamins And Minerals.",
            "Phytosterol Is An Important Substance In Peanuts, Which In Turn Is Struggling With Lung Cancer, Cancer Of The Large Intestine And Prostate. The Content Of Phytosterol In Peanuts Is Greater Than In Olive Oil.",
            "Due To Its Ingredients Peanuts Has A Pronounced Hypotensive, Antidepressant And Tonic, Strengthens The Nervous System."
          ],
        },
        {
          id: 2,
          ProductName: "Blanched Peanuts",
          BotanicalName: "Arachis hypogea",
          Origin: "India",
          Colour: "white",
          Purity: "100%",
          Availability: "In Stock",
          Count:"40/45 , 40/50 , 50/60 , 60/70",
          Selflife: "1 Year From Production Date.",
          Labling: "As Per Buyer's Requirement.",
          Pakining: " 10 KG, 15 KG, 25 KG, 50 LBS",
          image: [
            "https://img.freepik.com/free-photo/assortment-peanuts_23-2150361174.jpg?t=st=1709641748~exp=1709645348~hmac=ebeeda71fd27b218c68141b4d84f49f25155731bc938780b96a0756b8d237a5c&w=740",
            "https://img.freepik.com/free-photo/top-view-fresh-peanuts-white-table_140725-131386.jpg?t=st=1709641798~exp=1709645398~hmac=2e6953669405eef8f6f5a574bcfa1cabb9bb565f4dd7bf5f08c838e149fa13d5&w=740",
            "https://img.freepik.com/free-photo/peeled-peanuts-levitate-white-background_485709-39.jpg?t=st=1709641843~exp=1709645443~hmac=12e813db9c3ebd709f5697004b7874db4cb5ada9c49a1e179e287706138ab5d6&w=740",
          ],
    
          Description:
            "Blanched peanuts are a delightful variation of the beloved legume, boasting a smooth and creamy texture due to the removal of their outer skins. This process involves briefly immersing the peanuts in boiling water before quickly cooling them, resulting in easily peelable skins. The blanching process not only enhances the peanuts' texture but also offers a milder flavor profile compared to their unblanched counterparts.",
          CommonUses: [
            "Peanut Kernels Usually Eaten As-Is, By Cracking Them With Firm Pressure Between Fingers Or Using Clippers Or Nutcracker Machine. The Nut Can Be Also Be Enjoyed Salted Nuts, Confectionary, Bakery, Sweets &amp; Chocolates, Etc..",
            "Peanut Butter Is A Food-Paste Made From Ground-Roasted Nuts, With Or Without Addition Of Oil. It Is Popular Throughout The World And Commonly Used As Dip’s Spread. Peanut-Milk Is Also A Popular Lactose-Free Milk Like Healthy Drink.",
            "Roasted And Crushed Kernels Are Often Sprinkled Over Salads, Desserts, Particularly Sundaes And Other Ice Cream Based Preparations.",
            "Roasted And Split Nuts Are A Great Addition On The Tossed Salads.",
          ],
          Benifits: [
            "The High Fiber Content Of Simple And Complex Unsaturated Fatty Acids Play An Important Role In Reducing Blood Cholesterol.",
            "Peanut Contains More Protein Than A Piece Of Chicken The Same Weight. It Is Therefore Particularly Nutritious For Vegetarians. In Addition, It Contains Many Vitamins And Minerals.",
            "Phytosterol Is An Important Substance In Peanuts, Which In Turn Is Struggling With Lung Cancer, Cancer Of The Large Intestine And Prostate. The Content Of Phytosterol In Peanuts Is Greater Than In Olive Oil.",
            "Turmeric is widely used in Indian cuisine to season curries, soups, and sauces.",
          ],
        },
        {
            id: 3,
            ProductName: "Chickpeas",
            BotanicalName: "Cicer Arietinum",
            Origin: "India",
            Colour: "white",
            Purity: "100%",
            Availability: "In Stock",
            Count:"40/45 , 40/50 , 50/60 , 60/70",
            Selflife: "1 Year From Production Date.",
            Labling: "As Per Buyer's Requirement.",
            Pakining: " 10 Kg, 15 Kg, 25 Kg &amp; 50 LBS Paper/Poly Bags.",
          image: [
            "https://img.freepik.com/free-photo/chickpea_1368-6565.jpg?t=st=1709642886~exp=1709646486~hmac=44dddc276405f1cedca705b51746cc569a9c29a223cf7108c325d9a9bfe68c55&w=740",
            "https://img.freepik.com/free-photo/healthy-jaggery-still-life-arrangement_23-2149161542.jpg?w=900",
            "https://img.freepik.com/free-photo/cooked-chickpeas-bowl_53876-139906.jpg?t=st=1709702238~exp=1709705838~hmac=39b11b0fb2248abe3c9858bf6ee240789df0610513822628e84ea011dd50913e&w=360",
          ],
    
          Description:
            "Chickpeas Are Legumes Of The Family, Fabaceae, And They Are One Of The Oldest Legumes To Be Cultivated By Humans. They Are Large Roundish Legumes With A Bumpy Surface. There Are Two Commercial Classes Of Chickpea: Desi And Kabuli. The Desi Type Has A Thick, Coloured Seed Coat And A Coloured Flower. The Kabuli Type (Also Known As Garbanzo Bean) Has A Thin, White Seed Coat And A White Flower.",
          CommonUses: [
            "Hummus: A popular Middle Eastern dip made from mashed chickpeas, tahini, lemon juice, and garlic, often served with pita bread or vegetables.",
            "Salads: Chickpeas can be added to salads for extra protein and texture. They pair well with vegetables like tomatoes, cucumbers, and bell peppers.",
            "Curries and stews: Chickpeas are a staple ingredient in many Indian, Middle Eastern, and Mediterranean curries and stews. They add a hearty texture and absorb the flavors of the spices.",
            "Falafel: A traditional Middle Eastern dish made from ground chickpeas or fava beans, formed into balls or patties and deep-fried. It's often served in pita bread with tahini sauce and vegetables.",
          ],
          Benifits: [
            "Rich in Protein: Chickpeas are an excellent source of plant-based protein, making them a great option for vegetarians and vegans. Protein is essential for muscle growth, repair, and overall body function.",
            "High in Fiber: Chickpeas are high in dietary fiber, which promotes digestive health, helps regulate blood sugar levels, and aids in weight management by promoting feelings of fullness.",
            "Low Glycemic Index: The low glycemic index of chickpeas means they cause a slower and more gradual rise in blood sugar levels, which can help prevent spikes and crashes in energy levels and contribute to better blood sugar control.",
          ],
        },
        {
          id: 4,
          ProductName: "Roasted Gram",
          BotanicalName: "Cicer Arietinum",
          Origin: "India",
          Colour: "yellow",
          Purity: "100%",
          Availability: "In Stock",
          Count:"40/45 , 40/50 , 50/60 , 60/70",
          Selflife: "1 Year From Production Date.",
          Labling: "As Per Buyer's Requirement.",
          Pakining: " 10 Kg, 15 Kg, 25 Kg &amp; 50 LBS Paper/Poly Bags.",
          image: [
            "https://image.myupchar.com/2608/original/bhuna-chane-khane-ke-fayde-nuksan.jpg",
            "https://www.jiomart.com/images/product/original/rv00dnuv47/goodness-grocery-premium-quality-roasted-chana-bhuna-chana-desi-chickpeas-950gm-product-images-orv00dnuv47-p594783803-2-202210221556.png?im=Resize=(420,420)",
            "https://images1.livehindustan.com/uploadimage/library/2022/12/03/16_9/16_9_6/roasted_chana_1670049171.jpg",
          ],
    
          Description:
            "Roasted Gram Are The Grams Without The Skin Or The Peal. Dry Roasted Chana Or Whole Black Grams (Chickpeas) Are Typically Eaten As A Snack In India. The Nutritional Data Proves Chana To Be An Amazing Source Of Protein, Fiber, Folate, Minerals And Fatty Acids. This Snack Is Low In Fat And Packed With Energy, And It Works Well To Satisfy Hunger, Keeping Blood Sugar Levels Stable. Chanas Are Dry Roasted With Skin On A Slow Flame Till They Are Crisp. This Helps To Retain The Crispness And Freshness Of Chana And Enhances The Flavour As Well. These Chanas Are Easily Available In Indian Market. They Are Consumed As It Is As Snacks And Also Be Used In Preparation Of Variety Of Dishes.",
          CommonUses: [
            "Snacking: Roasted chickpeas make a crunchy and satisfying snack on their own. They can be seasoned with a variety of spices such as paprika, cumin, garlic powder, or chilly powder to add flavor.",
            "Salad Topping: Sprinkle roasted chickpeas on top of salads to add texture, protein, and a burst of flavor. They can replace croutons for a healthier alternative.",
            "Soup Garnish: Use roasted chickpeas as a garnish for soups and stews. They add a crunchy texture and depth of flavor to the dish.",
            "Trail Mix: Mix roasted chickpeas with nuts, seeds, and dried fruit to create a homemade trail mix. It's a portable and nutritious snack for on-the-go.",
          ],
          Benifits: [
            "Rich in Protein: Roasted chickpeas are a great source of plant-based protein, which is essential for muscle repair and growth, as well as overall body function.",
            "High in Fiber: Just like regular chickpeas, roasted chickpeas are high in dietary fiber, promoting digestive health, regulating blood sugar levels, and aiding in weight management.",
            "Satisfying Snack: Roasted chickpeas make a satisfying and crunchy snack that can help curb hunger and prevent overeating between meals.",
          ],
        },
        {
          id: 5,
          ProductName: "Red Chilli",
          BotanicalName: "Capsicum Frutescens ",
          Origin: "India",
          Colour: "Red",
          Purity: "100%",
          Availability: "In Stock",
          Count:"40/45 , 40/50 , 50/60 , 60/70",
          Selflife: "1 Year From Production Date.",
          Labling: "As Per Buyer's Requirement.",
          Pakining: "10 Kg, 15 Kg, 25 Kg &amp; 50 LBS Thin Jute / Perforated Poly Bags.",
          image: [
            "https://img.freepik.com/free-photo/dried-red-chilli-background_1150-35719.jpg?t=st=1709703631~exp=1709707231~hmac=3f19d0673ebb5170dd850d391b7215471a50e218416bfcb0cea47cbf19178e97&w=740",
            "https://img.freepik.com/free-photo/red-fresh-chilly-peppers-isolated-white_114579-43541.jpg?t=st=1709703658~exp=1709707258~hmac=eb1c17e221fb17ed145dbfffd867b6e1e28e881034321caf14007926f19efba4&w=740",
            "https://img.freepik.com/free-photo/bowl-full-hot-peppers_1127-112.jpg?t=st=1709703683~exp=1709707283~hmac=b815aa22dd68e71d48eac40670576f21a04a0d440d82cb2f0df1ac9708a4aae8&w=740",
          ],
    
          Description:
            "Indian Chillies Are Available With Different Levels Of Spiciness Ranging From High To Sweet. The Colour From Deep Red To Light Red. Harvest Of The Chillies In India Is Between Jan &amp; April. IPM – Integrated Pest Management Is An Approach Which Is Ecological To Control The Usage Of The Pesticides In Chilli Farming. Ipm Chillies Are Popular In Europe And Japan For Its Premium Quality And Pricing.",
          CommonUses: [
            "Seasoning: Red chilly is commonly used as a seasoning to add heat and flavor to dishes. It can be used in both powdered form or whole, depending on the recipe.",
            "Curries and Stews: Red chilly is a key ingredient in many curries, stews, and sauces, adding depth of flavor and heat. It pairs well with other spices like cumin, coriander, and turmeric.",
            "Sauces and Salsas: Red chilly is often used to make spicy sauces and salsas, such as hot sauce, salsa roja, or chilly paste. It adds heat and complexity to these condiments.",
            "Marinades: Red chilly can be used in marinades for meats, poultry, seafood, and tofu. It helps to infuse flavor and spice into the ingredients before cooking.",
          ],
          Benifits: [
            "Rich in Vitamins and Minerals: Red chilly peppers are a good source of vitamins A, C, and E, as well as minerals like potassium and magnesium. These nutrients play important roles in immune function, vision health, and overall well-being.",
            "Boost Metabolism: The compound responsible for the heat in chilly peppers, called capsaicin, has been shown to increase metabolism and promote fat burning. Consuming red chilly peppers may help with weight management and calorie burning.",
            "Heart Health: Capsaicin in red chilly peppers may help reduce cholesterol levels and improve heart health by lowering blood pressure and reducing inflammation. It also promotes healthy blood circulation.",
          ],
        },
        {
          id: 6,
          ProductName: "Chilli Powder",
          BotanicalName: "Capsicum Frutescens ",
          Origin: "India",
          Colour: "Red",
          Purity: "100%",
          Availability: "In Stock",
          Count:"40/45 , 40/50 , 50/60 , 60/70",
          Selflife: "Whole Year",
          Labling: "As Per Buyer's Requirement.",
          Pakining: "10 Kg, 15 Kg, 25 Kg &amp; 50 LBS Thin Jute / Perforated Poly Bags.",
          image: [
            "https://img.freepik.com/free-photo/top-view-bowl-with-spices_23-2149439571.jpg?w=740&t=st=1709704485~exp=1709705085~hmac=c16b882aa98c48350bc70ac49d85b45b5ac2dac8d6d78732034b7e56d406f1f1",
            "https://img.freepik.com/free-photo/top-view-wooden-spoon-bowl-with-cinnamon_23-2148426087.jpg?t=st=1709704699~exp=1709708299~hmac=ba4a1a5e22d23af65ccdb78ab94e36534929ad6055f1e9aa20c8ec48c1af8b38&w=740",
            "https://img.freepik.com/free-photo/closeup-bowl-red-pepper-spice-selected-focus_181624-61292.jpg?t=st=1709704741~exp=1709708341~hmac=248fdf6b202d182f1d70a4f5b7790a9757853f7b5b6b11d03fdca675dbcfc81f&w=740",
          ],
    
          Description:
            "Chilly Powder Is Well Known As Lal Mirch Powder. Chilly Powder Is Prepared By Grinding Best Quality Whole Chilly. Chilly Powder Is Used To Add Pungent Taste To Food And Many Other Dishes.chilly Is A Fruit Which Belongs To Capsicum Genus. It Has Many Varieties Which Are Differentiated On Its Pungency Measured On Scoville Scale. chilly Fruit When Ripened And Dried Becomes Red chilly, Which Is Further Grounded To Form Red chilly Powder",
          CommonUses: [
            "Seasoning: Red chilly powder is commonly used as a seasoning to add heat and flavor to dishes. It can be used in both powdered form or as a paste.",
            "Curries and Stews: Red chilly powder is a key ingredient in many curries, stews, and sauces, adding depth of flavor and heat. It pairs well with other spices like cumin, coriander, and turmeric.",
            "Marinades: Red chilly powder can be used in marinades for meats, poultry, seafood, and tofu. It helps to infuse flavor and spice into the ingredients before cooking.",
            "Dry Rubs: Red chilly powder is a common ingredient in dry rubs used for seasoning meats, such as barbecue rubs for ribs, brisket, or chicken wings. It adds both heat and flavor to the meat.",
          ],
          Benifits: [
            "Rich in Vitamins and Minerals: Red chilly powder contains essential vitamins and minerals such as vitamin C, vitamin A, potassium, and iron. These nutrients are important for overall health, including immune function, vision, and blood cell production.",
            "Metabolism Boost: The compound responsible for the heat in chilly peppers, capsaicin, has been shown to increase metabolism and promote fat burning. Consuming red chilly powder may help boost metabolism and aid in weight management.",
            "Heart Health: Capsaicin in red chilly powder may help lower cholesterol levels and improve heart health by reducing inflammation and promoting healthy blood circulation. It may also help lower blood pressure.",
          ],
        },
        {
          id: 7,
          ProductName: "Coriander Seeds",
          BotanicalName: "Coriander Sativam L ",
          Origin: "India",
          Colour: "Green",
          Purity: "From 98% To 99.50%",
          Availability: "In Stock",
          Count:"40/45 , 40/50 , 50/60 , 60/70",
          Selflife: "1 Year From Production Date.",
          Labling: "As Per Buyer's Requirement.",
          Pakining: "10 Kg, 15 Kg, 25 Kg &amp; 50 LBS Paper / Poly Bags.",
          image: [
            "https://img.freepik.com/premium-photo/coriander-seeds-with-fresh-leaves-isolated-white_51524-8770.jpg?w=740",
            "https://img.freepik.com/free-photo/coriander-seeds_1339-261.jpg?t=st=1709705075~exp=1709708675~hmac=69e4ac926da163dc11ce2c7750381ade205f8221a45fd351c636316d8dba9ac3&w=740",
            "https://img.freepik.com/free-photo/hemp-seeds_1368-5491.jpg?t=st=1709705102~exp=1709708702~hmac=dea696eee1f7cf7752edb1ec68cb1e5ac816427bc0ffdd11aab383d0c63dc5a3&w=740",
          ],
    
          Description:
            "This Seed Has Unique Taste &amp; Whiff, Therefore, Used In Making Various Types Of Delicious Cuisines. Apart From Its Usage As A Spice, It Is A Fragrant Spice, With A Mild, Distinctive Taste. It Is Widely Used As A Condiment In Foods, Beverages, Marinades, Desserts And Sweet Pastries And Also In American Cigarettes. It Also Has A Great Medicinal Value.&nbsp;",
          CommonUses: [
            "It Is Widely Flavoring Agent In Food Industry And Suitable To Add Pleasant Aroma &amp; Flavor To Food Items.",
            "Coriander Seeds Are Also Good To Be Used Inside Sausages, Baking, Candies, Pickles, Soups Etc",
            "Coriander Seeds Have Medicinal Benefits Too For Boosting Up Your Overall Health &amp; Stamina Level. It Has Wonderful Tendency For Treating Gastric &amp; Intestinal Pain.",
            "It Can Also Be Used Externally As Body Lotion Or Skin Treatments. The Oil Prepared Using Coriander Seeds Is Bactericidal &amp; Fungicidal.",
          ],
          Benifits: [
            "They Are Good To Add Fresh &amp; Different Flavours To Food",
            "They Have Wonderful Nutritional Value And Mineral Content",
            "It Boosts Up Overall Health &amp; Stamina Of An Individual",
          ],
        },
        {
          id: 8,
          ProductName: "Coriander Powder",
          BotanicalName: "Coriander Sativam L ",
          Origin: "India",
          Colour: "green",
          Purity: "From 99%, 99.50%",
          Availability: "In Stock",
          Count:"40/45 , 40/50 , 50/60 , 60/70",
          Selflife: "Whole Year",
          Labling: "As Per Buyer's Requirement.",
          Pakining: "10 Kg, 15 Kg, 25 Kg &amp; 50 LBS Paper / Poly Bags.",
          image: [
            "https://as2.ftcdn.net/v2/jpg/04/39/30/23/1000_F_439302349_7er7aHYFRVvRMxIfFKRQ8niyf1G1VsqS.jpg",
            "https://img.freepik.com/free-photo/indian-spice-heap-coriander-powder-dhaniya-powder-chinese-parsley-dried-seeds-selective-focus_466689-75823.jpg?t=st=1709705673~exp=1709709273~hmac=f771aa00336bdb719c7ffd70d1bf5b7009cc07fa5bb95833989ba68eb6c80fc8&w=360",
            "https://img.freepik.com/free-photo/spices-are-placed-spoon-placed-cement-ground_1150-20774.jpg?t=st=1709705728~exp=1709709328~hmac=8073f87198b321b71804e2ecc9c07159ba5267439a1527d79beacdd5bbb9bf45&w=740",
          ],
    
          Description:
            "Coriander Powder Is Well Known As Dhaniya Powder. Coriander Powder Is Manufactured By Grinding Best Quality Coriander Seeds. Coriander Powder Is Used To Flavor Rice, Stuffed Vegetables &amp; Many Other Dishes. When We Talk About Indian Kitchen, Coriander Seeds Are Easily Available And Used In Almost Every Dish For Good Flavor &amp; Colour. In Most Of The Cases, It Is Used In Dried Form By Indian Women And Usually Taken From Reputed Coriander Seeds Exporters Only.",
          CommonUses: [
            "It Is Widely Flavoring Agent In Food Industry And Suitable To Add Pleasant Aroma &amp; Flavor To Food Items.",
            "Coriander Seeds Are Also Good To Be Used Inside Sausages, Baking, Candies, Pickles, Soups Etc.",
            "Coriander Seeds Have Medicinal Benefits Too For Boosting Up Your Overall Health &amp; Stamina Level.",
            "It Has Wonderful Tendency For Treating Gastric &amp; Intestinal Pain.",
          ],
          Benifits: [
            "They Are Good To Add Fresh &amp; Different Flavours To Food",
            "They Have Wonderful Nutritional Value And Mineral Content",
            "It Boosts Up Overall Health &amp; Stamina Of An Individual",
          ],
        },
        {
          id: 9,
          ProductName: "Turmeric, Haldi",
          BotanicalName: "Curcumin Longa",
          Origin: "India",
          Colour: "yellow",
          Purity: "From 99%, 99.50%",
          Availability: "In Stock",
          Count:"40/45 , 40/50 , 50/60 , 60/70",
          Selflife: "Whole Year",
          Labling: "As Per Buyer's Requirement.",
          Pakining: "10 Kg, 15 Kg, 25 Kg, 50 LBS",
          image: [
            "https://img.freepik.com/free-photo/turmeric-powder_1323-401.jpg?t=st=1709706352~exp=1709709952~hmac=9662ce44dde1ce1cef5c0796647e8cefbad633af3f79b9d13566fadf870d411d&w=740",
            "https://img.freepik.com/free-photo/turmeric-powder_1323-400.jpg?t=st=1709706375~exp=1709709975~hmac=16447016810d61f80ddb9748b4a0db87f9b81b61b746be05c7c07c8fe4ab47f7&w=740",
            "https://img.freepik.com/free-photo/dry-turmeric-roots-barks-isolated-white-background-top-view-still-life-copy-space-flat-lay-close-up_639032-1294.jpg?t=st=1709706410~exp=1709710010~hmac=38bb263c140fa0a1f6ad77d6c20da24559cb3331885c6cad4fd52e4d07cc714f&w=740",
          ],
    
          Description:
            "Turmeric (“Queen Of Spices”) Plant Of The Ginger Family. Turmeric Is Widely Grown Both As A Kitchen Spice And For Its Medicinal Uses. Turmeric Has Been Used In East India And The Middle East For Thousands Of Years, And Is Now One Of The Most Used Spices In The World. It Is Domesticated Plant Rather Than Wild, India Remains One Of The Most Prominent Producers Of Turmeric.",
          CommonUses: [
            "Curries and Stews: Turmeric is a staple ingredient in many curry and stew recipes, especially in Indian and Southeast Asian cuisines. It adds a warm, earthy flavor and vibrant yellow color to dishes.",
            "Rice Dishes: Turmeric can be added to rice dishes, such as pilafs and biryanis, to impart color and flavor. It can also be used to make golden rice by cooking rice with turmeric and other spices.",
            "Soups and Broths: Turmeric adds depth of flavor and color to soups and broths. It pairs well with ingredients like ginger, garlic, and coconut milk in recipes such as turmeric lentil soup or golden vegetable broth.",
            "Smoothies and Juices: Turmeric can be added to smoothies and juices for its anti-inflammatory properties and vibrant color. It combines well with ingredients like ginger, pineapple, and citrus fruits.",
          ],
          Benifits: [
            "Powerful Anti-Inflammatory Properties: Curcumin, the main active ingredient in turmeric, has potent anti-inflammatory properties. It helps to reduce inflammation in the body, which can alleviate symptoms of inflammatory conditions such as arthritis, inflammatory bowel disease, and asthma.",
            "Antioxidant Activity: Turmeric is rich in antioxidants, which help to neutralize harmful free radicals in the body and protect cells from damage caused by oxidative stress. Antioxidants are important for overall health and may help reduce the risk of chronic diseases like heart disease, cancer, and neurodegenerative disorders.",
            "Potential Cancer Prevention: Some studies suggest that curcumin may help prevent the growth and spread of cancer cells, and even induce apoptosis (cell death) in cancer cells. It may also help reduce the risk of certain types of cancer, including breast, colon, prostate, and lung cancer.",
          ],
        },
        {
          id: 10,
          ProductName: "Makhana",
          BotanicalName: "Euryale ferox",
          Origin: "India",
          Colour: "white",
          size:"5,5+,6,6+,(All hand picked)",
          Purity: "From 99%, 99.50%",
          Availability: "In Stock",
          Count:"40/45 , 40/50 , 50/60 , 60/70",
          Selflife: "Whole Year",
          Labling: "As Per Buyer's Requirement.",
          Pakining: "10 Kg, 15 Kg, 25 Kg, 50 LBS",
          image: [
            "https://img.freepik.com/free-photo/white-deep-cup-full-delicious-dried-fruit_114579-70504.jpg?t=st=1709707064~exp=1709710664~hmac=d2be5080cfd827e889365a988ad58aa890ca12aaa3277ba0d9ca5b1602a609c1&w=740",
            "https://img.freepik.com/free-photo/sweet-cornflakes-with-muesli-bowl-marble-background_114579-74498.jpg?t=st=1709707083~exp=1709710683~hmac=2ff99bf7a4b07d0e4971b687e1d4134f0f0258a15bfc546d4e068d8d45f4fd9b&w=740",
            "https://as2.ftcdn.net/v2/jpg/04/58/44/43/1000_F_458444319_rpRE7D5p6FZQA3NJ2OsjDX2leBWaw4B4.jpg",
          ],
    
          Description:
            "Certainly! Makhana, also known as fox nuts or lotus seeds, are the seeds of the lotus flower (Nelumbo nucifera). They are commonly found in the stagnant waters of ponds and lakes in regions of Asia, particularly in India. While they have been used for centuries in traditional Indian medicine and cuisine, they have gained popularity worldwide in recent years due to their numerous health benefits and versatility in cooking.",
          CommonUses: [
            "Roasted Snack: Makhana is often roasted until crispy and seasoned with spices like salt, pepper, cumin, or chaat masala to make a crunchy and nutritious snack. It's a popular alternative to popcorn or chips.",
            "Curries and Gravies: Makhana is used in curries and gravies to add texture and flavor. It absorbs the flavors of the spices and sauces while retaining its crunchy texture. It pairs well with creamy sauces like cashew or coconut-based gravies.",
            "Kheer and Desserts: Makhana is used to make kheer, a traditional Indian dessert similar to rice pudding. It's cooked in milk and flavored with sugar, cardamom, and nuts to make a creamy and delicious dessert.",
            "Stir-fries and Pilafs: Makhana can be added to stir-fries and pilafs for added texture and nutrition. It pairs well with vegetables, rice, and spices like cumin, turmeric, and coriander.",
          ],
          Benifits: [
            "Low in Calories: Makhana is low in calories and fat, making it a healthy snack option for those looking to manage their weight or reduce calorie intake.",
            "High in Protein: Despite being low in calories, makhana is high in protein, making it a satisfying and filling snack. Protein is essential for muscle repair, growth, and overall body function.",
            "Gluten-Free: Makhana is naturally gluten-free, making it a suitable snack option for those with gluten intolerance or celiac disease.",
          ],
        },
        {
          id: 11,
          ProductName: "jaggery",
          BotanicalName: "Saccharum officinarum",
          Origin: "India",
          Colour: "Brown",
          Purity: "From 99%, 99.50%",
          Availability: "In Stock",
          Count:"40/45 , 40/50 , 50/60 , 60/70",
          Selflife: "Whole Year",
          Labling: "As Per Buyer's Requirement.",
          Pakining: "10 Kg, 15 Kg, 25 Kg, 50 LBS",
          image: [
            "https://img.freepik.com/free-photo/delicious-jaggery-still-life-composition_23-2149161609.jpg?t=st=1709707617~exp=1709711217~hmac=00301d16e0bd6883da15841b6bfc9678ea951dc0060bccc46a694dce6d39cb01&w=740",
            "https://img.freepik.com/free-photo/healthy-jaggery-still-life-composition_23-2149161604.jpg?t=st=1709707642~exp=1709711242~hmac=f079bb816667dfdc8cfb303d2d35e29497a1768eee574830edbf7401f7de1ecc&w=360",
            "https://img.freepik.com/free-photo/delicious-jaggery-still-life-composition_23-2149161614.jpg?t=st=1709707691~exp=1709711291~hmac=2924d2a2f0c4bcb9ef9098452510bc31a80350f6891ce586c4b251b49653bd3e&w=360",
          ],
    
          Description:
            "Jaggery is a natural sweetener that is commonly used in various cuisines around the world, particularly in South Asia, Southeast Asia, and Africa. It is made from the concentrated sap of sugarcane or palm trees, which is boiled and then left to cool and solidify into a block or cake-like form.",
          CommonUses: [
            "Sweetening: Jaggery is commonly used as a sweetener in cooking and baking. It can be grated, chopped, or melted and added to desserts, sweets, and beverages to impart a rich, caramel-like sweetness. It's a key ingredient in traditional sweets like laddoos, halwa, and gulab jamun.",
            "Beverages: Jaggery is used to sweeten a variety of beverages, including tea, coffee, and herbal drinks. In India, jaggery is often added to chai tea to enhance its flavor and sweetness. It's also used to make beverages like panakam, a sweet and tangy drink popular during festivals.",
            "Curries and Sauces: Jaggery is used in savory dishes to balance flavors and add depth. It's often added to curries, sauces, and gravies to impart a subtle sweetness and enhance the overall taste profile. Jaggery is a common ingredient in dishes like sambar, rasam, and korma.",
            "Marinades and Glazes: Jaggery can be used in marinades and glazes for meats, poultry, and seafood. It adds sweetness and helps tenderize the meat while adding a rich flavor. Jaggery-based marinades are commonly used in dishes like tandoori chicken and fish.",
          ],
          Benifits: [
            "Rich in Nutrients: Jaggery retains some of the natural vitamins and minerals present in sugarcane or palm sap, including iron, magnesium, potassium, and vitamins B1, B2, B3, and B6. These nutrients are essential for various bodily functions, such as energy production, nerve function, and blood cell formation.",
            "Source of Antioxidants: Jaggery contains antioxidants, such as polyphenols and flavonoids, which help neutralize harmful free radicals in the body and protect cells from damage. Antioxidants play a crucial role in reducing inflammation and lowering the risk of chronic diseases like heart disease, cancer, and neurodegenerative disorders.",
            "Boosts Immunity: The vitamins and minerals present in jaggery, particularly iron and vitamin C, help boost immune function and support the body's defense against infections and diseases. Regular consumption of jaggery may help strengthen the immune system and improve overall health.",
          ],
        },
      ];
    


    useEffect(() => {
        const response = () => {
            try {
                const selectedItem = dataList.find(item => item.id === parseInt(id));
                setItemData(selectedItem);
            } catch (error) {
                console.log(error);
            }
        };

        response();
    }, [id]);

    // console.log('filter' , itemData.CommonUses[0])

    console.log('item', itemData)

    if (!itemData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="single-container">
                <div className="single-product">
                    <div className="right">
                        <div className="product-image">
                        <img src={itemData.image && itemData.image[0]} alt="ram" />

                        </div>

                        <div className="product-more-image">
                            {
                                itemData.image && itemData.image.map((item,index) => (
                                    <div className="img-box" key={index}>
                                        <img src={item} alt="ram" />
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <button className="px-3  py-2  bg-red-500 text-white text-xl rounded-lg">
                                <Link to="/contact">Read More</Link>
                            </button>
                        </div>
                    </div>

                    <div className="left">
                        <div className="product-details">
                            <div className="detail">
                                <span className="label">Product Name:</span>
                                <span className="value">{itemData.ProductName}</span>
                            </div>
                            <div className="detail">
                                <span className="label">Botanical Name:</span>
                                <span className="value">{itemData.BotanicalName}</span>
                            </div>
                            <div className="detail">
                                <span className="label">Origin:</span>
                                <span className="value">{itemData.Origin}</span>
                            </div>
                            <div className="detail">
                                <span className="label">Colour:</span>
                                <span className="value">{itemData.Colour}</span>
                            </div>
                            <div className="detail">
                                <span className="label">Count:</span>
                                <span className="value">{itemData.Count}</span>
                            </div>
                            <div className="detail">
                                <span className="label">Purity:</span>
                                <span className="value">{itemData.Purity}</span>
                            </div>
                            <div className="detail">
                                <span className="label">Availability:</span>
                                <span className="value">{itemData.Availability}</span>
                            </div>
                            <div className="detail">
                                <span className="label">Shelf Life:</span>
                                <span className="value">{itemData.Selflife}</span>
                            </div>
                            <div className="detail">
                                <span className="label">Labeling:</span>
                                <span className="value">{itemData.Labling}</span>
                            </div>
                            <div className="detail">
                                <span className="label">Packaging:</span>
                                <span className="value">{itemData.Pakining}</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="product-info px-10 ">
                    <div className="product-description">
                        <h2 className='line mb-2 relative text-3xl font-semibold '>Description:</h2>
                        <p className='text-xl py-5'>
                            {itemData.Description}
                        </p>
                    </div>
                    <div className="product-use">
                        <h2 className='line mb-2 relative text-3xl font-semibold '>Common Uses:</h2>

                        <ul className="p-5">
                            {
                                itemData.CommonUses && itemData.CommonUses.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>

                    </div>

                    <div className="product-benifits">
                        <h2 className='line mb-2 relative text-3xl font-semibold '>Benifits:</h2>
                        <ul className='p-5'>
                            {
                                itemData.Benifits && itemData.Benifits.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Singleproduct;
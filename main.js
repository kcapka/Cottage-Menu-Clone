//Mobile menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menulinks");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

//End mobile menu

//Replacing menu items when category is selected
const replaceWithBreakfast = () => {
    let breakfastMenu = `<div id="menuitems">
    <section class="section-container" id="fruit-baked">
        <h2>Fruit & Baked</h2>
        <div class="items">
            <div class="entry">
                <p class = 'entrytitle'>Local Roots Kombucha</p>
                <p class="price">$8.50</p>
                <p class="description">Strawberry Mojito or Virgin Islands (pineapple and coconut)</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Fresh Scone</p>
                <p class="price">$3.25</p>
                <p class="description">Baked fresh daily</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Coffee Cake</p>
                <p class="price">$5.50</p>
                <p class="description">With buttermilk</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>House Granola</p>
                <p class="price">$14.00</p>
                <p class="description">Pecans, craisins, fresh fruit, your choice of milk or plain yogurt</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Fruit Bowl (V,GF)</p>
                <p class="price">$12.50</p>
                <p class="description">With strawberry creme fraiche|add house granola: $2.25</p>
            </div>
        </div>
    </section>

    <section class="section-container" id="griddle">
        <h2>Griddle</h2>
        <p class="section-subitem">top with bananas, strawberries, blueberries, add $1.75 each / [GF] bread available</p>
        <div class="items">
            <div class="entry">
                <p class = 'entrytitle'>Lemon Ricotta Pancakes</p>
                <p class="price">$16.75</p>
                <p class="description">House recipe lemon ricotta batter, lemon zest</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Buttermilk Pancakes</p>
                <p class="price">$15.00</p>
                <p class="description">House recipe</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Cinnamon Swirl Pancakes</p>
                <p class="price">$16.00</p>
                <p class="description">Buttermilk pancakes, cinnamon swirl, maple frosting, walnuts</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Brioche French Toast</p>
                <p class="price">$16.25</p>
                <p class="description">A cottage specialty</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Stuffed French Toast</p>
                <p class="price">$18.50</p>
                <p class="description">Brioche, strawberry compote, mascarpone</p>
            </div>
        </div>
    </section>

    <section class="section-container" id="omelet">
        <h2>Omelet</h2>
        <p class="section-subitem">order as a scramble, fritatta, served with cottage potatoes, scone, add $1 for egg whites / [GF] bread available</p>
        <div class="items">
            <div class="entry">
                <p class = 'entrytitle'>Roasted Vegetable</p>
                <p class="price">$17.50</p>
                <p class="description">rainbow cauliflower, broccoli, chives, cheddar + brie cheese</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Wild Mushroom</p>
                <p class="price">$18.00</p>
                <p class="description">Wild mushrooms, goat cheese, spinach, roasted shallots</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Southern California</p>
                <p class="price">$18.00</p>
                <p class="description">Bacon, guacamole, cheddar cheese, sour cream</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Wild Caught Shrimp</p>
                <p class="price">$23.00</p>
                <p class="description">shrimp, poblano chili, shaved asparagus, lemon zest, cheddar and jack cheese with roasted bell pepper sauce</p>
            </div>
        </div>
    </section>

    <section class="section-container" id="eggs">
        <h2>Eggs</h2>
        <p class="section-subitem">all eggs served with cottage potatoes | egg whites add $1 | avocado add $2.25</p>
        <div class="items">
            <div class="entry">
                <p class = 'entrytitle'>Soy Chorizo Hash</p>
                <p class="price">$16.25</p>
                <p class="description">Soy chorizo with cilantro, black beans, tomato, green onion, potato and queso fresco on two crispy corn tortillas with scrambled eggs</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Smoked Salmon Hash</p>
                <p class="price">$20.00</p>
                <p class="description">Sweet potatoes, cottage potatoes, leeks, bacon, scrambled eggs, peppers, hollandaise, fresh dill, served with a scone</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Chilaquiles</p>
                <p class="price">$16.50</p>
                <p class="description">tortilla chips, house-made guajillo sauce, two eggs - any style, sour cream, red onion, cilantro, cotija, black beans, served with cottage potatoes</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Monterrey Scramble</p>
                <p class="price">$16.75</p>
                <p class="description">Scramble with bacon, cheddar cheese, green chilies, pico de gallo, black beans, served with cottage potatoes and a side of corn tortillas</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Braised Beef Hash</p>
                <p class="price">$18.00</p>
                <p class="description">Eggs any style with braised beef, roasted bell peppers, sweet onion, avocado, potato, asparagus, pico de gallo and mild jalapeno crema</p>
            </div>
        </div>
    </section>

    <section class="section-container" id="benedicts">
        <h2>Benedicts</h2>
        <p class="section-subitem">served with cottage potatoes | avocado add $2.25 | [GF] bread available</p>
        <div class="items">
            <div class="entry">
                <p class = 'entrytitle'>Eggs Benedict</p>
                <p class="price">$16.00</p>
                <p class="description">Poached eggs, Canadian bacon, hollandaise - over an English muffin</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Pork Belly Benedict</p>
                <p class="price">$18.00</p>
                <p class="description">Poached eggs, pork belly, sautéed spinach, garlic,</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Eggs La Jolla</p>
                <p class="price">$18.00</p>
                <p class="description">Poached eggs, Canadian bacon, balsamic mushrooms, spinach, roasted tomato, hollandaise - over an English muffin</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Mexicali Benedict</p>
                <p class="price">$18.00</p>
                <p class="description">Poached eggs, soy chorizo, cotija cheese, roasted poblano Hollandaise - over corn cakes</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Antojito Benedict</p>
                <p class="price">$19.00</p>
                <p class="description">Home made sopes with chili braised beef, black beans, poached eggs, shredded lettuce, queso fresco, jalapeño crema and pico de gallo</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Crab and Prosciutto Benedict</p>
                <p class="price">$23.00</p>
                <p class="description">Poached egg, Indonesian Blue Crab, crispy prosciutto with Old Bay Hollandaise over rosemary and olive oil bread</p>
            </div>
        </div>
    </section>

    <section class="section-container" id="classics">
        <h2>Classics</h2>
        <div class="items">
            <div class="entry">
                <p class = 'entrytitle'>All American Breakfast</p>
                <p class="price">$15.00</p>
                <p class="description">Two egg any style, bacon or chicken sausage, served with a scone and cottage potatoes</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Morning Glory Sandwich</p>
                <p class="price">$17.00</p>
                <p class="description">Fried egg, bacon, smoked gouda, tomato, arugula, onion, lemon aioli on sourdough served with cottage potatoes<br>|Add avocado: $2.25</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Joe's Special</p>
                <p class="price">$16.00</p>
                <p class="description">Two egg scramble, chicken sausage, spinach, mushrooms, onions, served with a scone and cottage potatoes</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Steel Cut Irish Oatmeal</p>
                <p class="price">$13.00</p>
                <p class="description">Steel cut Irish oats with milk, toasted pecans, brown sugar, raisins, banana, and fresh berries</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Avocado Smash</p>
                <p class="price">$15.75</p>
                <p class="description">"Sadie rose bakery" rosemary and olive oil bread topped with fresh avocado and a choice of: *-mozzarella pearls + baby tomato -*|*- cucumber, kalamata olive, onion, tomato, feta and oregano-*|*- smoked salmon, capers, dill + red onion($17)-*| Add egg: $3</p>
            </div>
        </div>
    </section>

    <section class="section-container" id="featured">
        <h2>Featured</h2>
        <div class="items">
            <div class="entry">
                <p class = 'entrytitle'>Local Roots Kombucha</p>
                <p class="price">$9.00</p>
                <p class="description">Purple Haze 6% Alcohol - Blood Orange Mimosa 6% Alcohol</p>
            </div>
        </div>
    </section>
</div>`;
    document.getElementById("menuitems").outerHTML = breakfastMenu;
};

const replaceWithLunch = () => {
    let lunchMenu = 
    `<div id="menuitems">
    <section class="section-container" id="Starters">
        <h2>Starters</h2>
        <div class="items">
            <div class="entry">
                <p class = 'entrytitle'>Frito Misto</p>
                <p class="price">$17.00</p>
                <p class="description">Fried calamari tubes and tentacles, shrimp, zucchini, haricot verts, chipotle aioli</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Capellini Crabcakes</p>
                <p class="price">$18.00</p>
                <p class="description">Pan-seared lump crab, old bay aioli</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Baked Brie</p>
                <p class="price">$14.25</p>
                <p class="description">Brie cheese baked and topped with roasted tomato, spinach and mushrooms with toasted crostini</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Guacamole + Chips</p>
                <p class="price">$12.75</p>
                <p class="description">Served with pico de gallo
                </p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Gorgonzola Tart</p>
                <p class="price">$16.00</p>
                <p class="description">puffed pastry with gorgonzola, parmesan and goat cheese, caramelized onion, shallots and wild mushrooms</p>
            </div>
        </div>
    </section>
</div>`;
    document.getElementById("menuitems").outerHTML = lunchMenu;
};

const replaceWithKids = () => {
    let kidsMenu = `<div id="menuitems">
    <section class="section-container">
        <h2>Breakfast</h2>
        <div class="items">
            <div class="entry">
                <p class = 'entrytitle'>French Toast</p>
                <p class="price">$10.75</p>
                <p class="description">Choice of plain, bananas or strawberries</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Little All American</p>
                <p class="price">$10.75</p>
                <p class="description">1 egg any style, bacon + scone</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Fruit Plate</p>
                <p class="price">$10.75</p>
                <p class="description">Fresh seasonal selection</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Buttermilk Pancake</p>
                <p class="price">$10.75</p>
            </div>
        </div>
    </section>
</div>`;
    document.getElementById('menuitems').outerHTML = kidsMenu;
};

const replaceWithBloodDrive = () => {
    let bloodDriveMenu = `<div id="menuitems">
    <section class="section-container">
        <h2>Blood Drive</h2>
        <p class ='section-subitem'>April 16 Blood Drive</p>
        <div class="items">
            <div class="entry">
                <p class = 'entrytitle'>Blood Drive</p>
                <p class="description">Next Drive June 2022</p>
            </div>
        </div>
    </section>
</div>`;
    document.getElementById('menuitems').outerHTML = bloodDriveMenu;
};

const replaceWithDinner = () => {
    let dinnerMenu = `<div id="menuitems">
    <section class="section-container">
        <h2>Starters</h2>
        <div class="items">
            <div class="entry">
                <p class = 'entrytitle'>3 Cheese Tart</p>
                <p class="price">$16.00</p>
                <p class="description">puffed pastry tart with gorgonzola, goat and parmesan cheese, caramelized onion and shallots and wild mushrooms topped with frisee salad</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Frito Misto</p>
                <p class="price">$17.00</p>
                <p class="description">fried calamari rings and tentacles, shrimp, zucchini and haricot vert with a chipotle aioli</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Capellini Crab Cake</p>
                <p class="price">$18.00</p>
                <p class="description">pan seared lump crab cake, old bay aioli</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Baked Brie</p>
                <p class="price">$14.25</p>
                <p class="description">brie cheese baked and topped with roasted tomato, spinach and mushrooms with toasted crostini</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Guacamole and Chips</p>
                <p class="price">$12.75</p>
                <p class="description">served with pico de gallo</p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Today's Soup</p>
                <p class="price">$9.00</p>
                <p class="description">Bowl</p>
            </div>
        </div>
    </section>
</div>`;
    document.getElementById('menuitems').outerHTML = dinnerMenu;
};

const replaceWithDessert = () => {
    let dessertMenu = `<div id="menuitems">
    <section class="section-container">
        <h2>House Made Dessert</h2>
        <div class="items">
            <div class="entry">
                <p class = 'entrytitle'>Raspberry and White Chocolate Bread Pudding</p>
                <p class="price">$7.50</p>
                <p class="description"></p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Peanut Butter Pie</p>
                <p class="price">$7.50</p>
                <p class="description"></p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Chocolate Mousse</p>
                <p class="price">$7.50</p>
                <p class="description"></p>
            </div>
            <div class="entry">
                <p class = 'entrytitle'>Lemon Cheesecake</p>
                <p class="price">$7.50</p>
                <p class="description"></p>
            </div>
        </div>
    </section>
</div>`;
    document.getElementById('menuitems').outerHTML = dessertMenu;
}

//End menu replacement

//Highlighting selected menu category

let breakfastTitle = document.querySelector('.breakfast');
let lunchTitle = document.querySelector('.lunch');
let kidsTitle = document.querySelector('.kids');
let bloodTitle = document.querySelector('.blood-drive');
let dinnerTitle = document.querySelector('.dinner');
let dessertTitle = document.querySelector('.dessert');

breakfastTitle.classList.add('active');

breakfastTitle.addEventListener('click', () => {
    lunchTitle.classList.remove('active');
    bloodTitle.classList.remove('active');
    dinnerTitle.classList.remove('active');
    dessertTitle.classList.remove('active');
    kidsTitle.classList.remove('active');
    breakfastTitle.classList.add('active');
});

lunchTitle.addEventListener('click', () => {
    lunchTitle.classList.add('active');
    bloodTitle.classList.remove('active');
    dinnerTitle.classList.remove('active');
    dessertTitle.classList.remove('active');
    kidsTitle.classList.remove('active');
    breakfastTitle.classList.remove('active');
});

kidsTitle.addEventListener('click', () => {
    breakfastTitle.classList.remove('active');
    kidsTitle.classList.add('active');
    lunchTitle.classList.remove('active');
    bloodTitle.classList.remove('active');
    dinnerTitle.classList.remove('active');
    dessertTitle.classList.remove('active');
});

bloodTitle.addEventListener('click', () => {
    breakfastTitle.classList.remove('active');
    kidsTitle.classList.remove('active');
    lunchTitle.classList.remove('active');
    bloodTitle.classList.add('active');
    dinnerTitle.classList.remove('active');
    dessertTitle.classList.remove('active');
});

dinnerTitle.addEventListener('click', () => {
    breakfastTitle.classList.remove('active');
    kidsTitle.classList.remove('active');
    lunchTitle.classList.remove('active');
    bloodTitle.classList.remove('active');
    dinnerTitle.classList.add('active');
    dessertTitle.classList.remove('active');
});

dessertTitle.addEventListener('click', () => {
    breakfastTitle.classList.remove('active');
    kidsTitle.classList.remove('active');
    lunchTitle.classList.remove('active');
    bloodTitle.classList.remove('active');
    dinnerTitle.classList.remove('active');
    dessertTitle.classList.add('active');
});


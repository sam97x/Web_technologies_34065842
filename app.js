const WHISKIES = [
    {
        id: 1,
        name: 'Yamazaki 12 year old',
        region: 'Japan',
        abv: '43%',
        price: '140.00',
        age: '12',
        palate: ['Coconut', 'Cranberry', 'Butter'],
        description: ['The Yamazaki whisky is Suntory\'s flagship single malt whisky, from Japan\'s first and oldest malt distillery. This prized whisky contain carefully blended components aged in American, Spanish, and Japanese Mizunara oak.'],
        image: 'https://img.thewhiskyexchange.com/1400/japan_yam1.jpg?v=20261019',


    },
    {
        id: 2, 
        name: 'Hakushu 12 year old',
        region: 'Japan',
        abv: '43%',
        price: '140.00',
        age: '12',
        palate: ['Sweet Pear', 'mint', 'kiwi'],
        description: ['From Suntory’s mountain forest distillery, nestled deep in Mt. Kaikomagatake, Suntory Single Malt Whisky Hakushu is crisp and gently smoky single malt whisky with herbal notes that is the revelation of Japanese single malts.'],
        image: 'https://img.thewhiskyexchange.com/1400/japan_hak1.jpg?v=20261019',

    },
    {
        id: 3,
        name: 'Miyagikyo single malt',
        region: 'Japan',
        abv: '43%',
        price: '75.00',
        age: 'Non-Age Statement',
        palate: ['Malt', 'Sherry', 'Pear', 'Cinnamon'],
        description: 'Elegant, fruity and approachable',
        image: 'https://img.thewhiskyexchange.com/1400/japan_miy10.jpg?v=20261019',

    },
    {
        id: 4,
        name: 'Yoichi Single Malt',
        region: 'Japan',
        abv: '45%',
        price: '95.00',
        age: 'Non-Age Statement',
        palate: ['Peat', 'Smoke', 'Salt', 'Citrus Fruits'],
        description: ['A smoky whisky with a maritime character.'],
        image: 'https://img.thewhiskyexchange.com/1400/japan_yoi22.jpg?v=20261019',
    },
    {
        id: 5,
        name: 'Macallan Double Cask 18 Year Old',
        region: 'Speyside',
        abv: '43%',
        price: '320',
        age: '18',
        palate: ['Dried Fruits', 'Ginger', 'Toffee', 'Dark Chocolate'],
        image: 'https://img.thewhiskyexchange.com/1400/macob.18yov18.jpg?v=20261019',
    },
    {
        id: 6,
        name: 'Macallan Sherry Cask 12 Year Old',
        region: 'Speyside',
        price: '81.25',
        age: '12',
        palate: ['Dried Fruit,', 'Sherry', 'Smoke', 'Plums', 'Prunes', 'Oak'],
        description: ['Delicious ly smooth with dried fruits and sherry, balanced with woodsmoke and spice.'],
        image: 'https://img.thewhiskyexchange.com/1400/macob.12yo.jpg?v=20261019',
    },
    {
        id: 7,
        name: 'Balvenia 14 Caribbean Cask',
        region: 'Speyside',
        abv: '43%',
        price: '69.95',
        age: '14',
        palate: ['Apples', 'Lemons', 'Icing Sugar', 'Brown Toast', 'Syrup', 'Caramel', 'Toffee Popcorn'],
        description: 'After an initial maturation in ex-bourbon barrels, it was finished in Caribbean rum casks,s which imparted a rich creaminess to the whiskies hallmark honeyed character',
        image: 'https://img.thewhiskyexchange.com/1400/balob.14yov4.jpg?v=20261019',
    },
    {
        id: 8,
        name: 'Craigellachie 23 Year Old',
        region: 'Speyside',
        abv: '43%',
        price: '414.00',
        age: '23',
        palate: ['Sulphur', 'Vanilla', 'Spicy Cinnamon', 'Menthol'],
        description: ['The extra years resting in oak allows for further flavor development in the 23 Year Old. Vanilla moves to the palate, spices and menthol notes emerge and charred pineapple intensifies.'],
        image: 'https://img.thewhiskyexchange.com/1400/crgob.23yo.jpg?v=20261019',
    },
    {
        id: 9,
        name: 'Glenfarclas 10 Year Old',
        region: 'Speyside',
        abv: '40%',
        price: '43.95',
        age: '10',
        palate: ['Malt', 'Raisins','Honey', 'Cinnamon'],
        description: ['Glenfarclas 10yo is a straw-gold , delicately light, sweet and malty dram leaving a long slightly spicy finish. Always impeccably well-made, this is a whisky that always delivers in quality.'],
        image: 'https://img.thewhiskyexchange.com/1400/gfcob.10yo.jpg?v=20261019',
    },

    {
        id: 10,
        name: 'Glenallachie 8 Year Old',
        region: 'Speyside', 
        abv: '46%',
        price: '43.25',
        age: '8',
        palate: ['Honey', 'Ginger', 'Biscuits', 'Heather', 'Cinnamon', 'Milk Chocolate'],
        description: ['This richly textured malt was matured in a combination of Pedro Ximenez and Oloroso sherry puncheons along with a small proportion of virgin oak casks and red wine barriques.'],
        image: 'https://img.thewhiskyexchange.com/1400/gleob.08yov1.jpg?v=20261019',
    },
    {
        id: 11,
        name: 'Dalmore 15 Year Old',
        region: 'Highland',
        abv: '40%',
        price: '107.00',
        age: '15',
        palate: ['Christmas Cake', 'Raisins', 'Cinnamon', 'Cherry', 'Nutmeg', 'Ginger'],
        description: ['The classic Dalmore 15 Year Old is partly matured in Matusalem oloroso sherry butts from the legendary Gonzales Byass in Jerez. These rare casks bring distinctive notes of coffee beans, dark chocolate truffles and a sense of umami that rounds out this luxurious single malt perfectly. A class act all the way.'],
        image: 'https://img.thewhiskyexchange.com/1400/dlmob.15yo.jpg?v=20261019',
    },
    {
        id: 12,
        name: 'Dalmore Cigar Malt Reserve',
        region: 'Highland',
        abv: '40%',
        price: '105.00',
        age: 'Non-Age Statement',
        palate:  ['Raisins', 'Mint', 'Dark Chocolate', 'Liquorice Root', 'Oak'],
        description: ['Round and sweet. Good balance with the nose. The same rich mint chocolate note. A precise oak frame ties up the rich aromatic profile. Liquorice and raisins as well.'],
        image: 'https://img.thewhiskyexchange.com/1400/dlmob.non10.jpg?v=20261019',
    },
    {
        id: 13,
        name: 'Highland Park 15',
        region: 'Highland',
        abv: '44%',
        price: '80.50',
        age: '15',
        palate: ['Orange', 'Hazelnut', 'Peat Smoke', 'Heather', 'Honey', 'Vanilla'],
        description: ['A malt with a rich combination of heather honey, vanilla, and a subtle, warming smoke from the island\’s distinctive peat. You\'ll also find notes of orange zest and salted hazelnuts.'],
        image: 'https://img.thewhiskyexchange.com/1400/hlpob.15yov9.jpg?v=20261019',
    },
    {
        id: 14,
        name: 'Oban 14',
        region: 'Highland',
        abv: '43%',
        price: '79.95',
        age: '14',
        palate: ['Figs', 'Malt', 'Honey', 'Smoke'],
        description: ['Oban 14 Year Old leans into a more elegant style with just the barest hint of smoke and an oily texture that complements those hallmark stone fruits.'],
        image: 'https://img.thewhiskyexchange.com/1400/obnob.14yo.jpg?v=20261019',
    },
    {
        id: 15,
        name: 'Balblair 12',
        region: 'Highland',
        abv: '46%',
        price: '45.95',
        age: '12',
        palate: ['Cinnamon', 'Orange', 'Vanilla', 'Leather', 'Honey'],
        description: ['a whisky with a warm, complex character and a sweet, citrusy aroma. The palate offers notes of oranges, honey and cinnamon before a long, creamy finish with hints of vanilla and leather.'],
        image: 'https://img.thewhiskyexchange.com/1400/blbob.12yo.jpg?v=20261019',
    },
    {
        id: 16,
        name: 'Glendronach 21',
        region: 'Highland',
        abv: '48%',
        price: '250.00',
        age: '21',
        palate: ['Dried Fruit', 'Figs', 'Raisins', 'Candied Peel', 'Clove', 'Cacao'],
        description: ['This Highland malt is bold, sherried and full of presence, with dried fig, raisin and candied peel running through a palate layered with bitter cocoa, clove and polished oak. Long ageing in oloroso and pedro ximenez casks brings weight and structure, with leathery dryness and spice building into the finish.'],
        image: 'https://img.thewhiskyexchange.com/1400/grnob.21yov1.jpg?v=20261019', 
    },
    {
        id: 17,
        name: 'Lagavulin 16',
        region: 'Islay',
        abv: '43%',
        price: '79.95',
        age: '16',
        palate: ['Orange', 'Kippers', 'Smoke', 'Brine', 'Pineapple'],
        description: ['With Lagavulin producing among the most heavily peated of all Islay whiskies, the flagship in its range is not for the faint-hearted, but it inspires fanatical devotion in its many followers for its vibrant array of flavours mingling with the smoke, from toffee to citrus and plenty more besides.'],
        image: 'https://img.thewhiskyexchange.com/1400/lgvob.16yo.jpg?v=20261019',
    },
    {
        id: 18,
        name: 'Laphroaig 18',
        region: 'Islay',
        abv: '48%',
        price: '174.00',
        age: '18',
        palate : ['Tobacco','Leather', 'Seaweed', 'Stewed Fruit', 'Crystallised Ginger', 'Milk Chocolate'],
        description: ['Even after 18 years in ex-bourbon barrels, the distillery’s iconic smoky character continues to shine through unabated. You’ll find notes of tobacco, leather and seaweed which marry beautifully with soft fruits, candied ginger and salted chocolate.'],
        image: 'https://img.thewhiskyexchange.com/1400/lrgob.18yov3.jpg?v=20261019',    
    },
    {
        id: 19,
        name: 'Bunnahabhain 12',
        region: 'Islay',
        abv: '46%',
        price: '42.95',
        age: '12',
        palate: ['Vanilla', 'Smoke', 'Cream', 'Oak', 'Cherry', 'Dried Fruit'],
        description: ['It was matured in top tier bourbon and sherry casks, offering a harmonious blend of floral notes, dried fruit, and fresh citrus, complemented by roasted nuts and a subtle touch of sea salt. Although unpeated, this is a quintessential Islay whisky.'],
        image: 'https://img.thewhiskyexchange.com/1400/bunob.12yov3.jpg?v=20261019',
    },
    {
        id: 20,
        name: 'Ardnahoe Bholsa',
        region: 'Islay',
        abv: '50%',
        price: '61.25',
        age: 'Non-Age Statement',
        palate: ['Orange', 'Plums', 'Peat Smoke', 'Raisins', 'Sherry'],
        description: ['A richly sherried expression from Ardnahoe distillery with warming notes of stone fruit, burnt orange, tobacco leaves and thick Islay peat smoke. Being predominantly aged in oloroso casks, this bottling has a balancing sweetness with dates, raisins and prunes. An excellent dram for anyone who enjoys peat and sherry.'],
        image: 'https://img.thewhiskyexchange.com/1400/anhob.non2.jpg?v=20261019',
    },
    {
        id: 21,
        name: 'Glen Scotia Victoriana',
        region: 'Campbeltown',
        abv: '54.2%',
        price: '79.00',
        age: 'Non-Age Statement',
        palate: ['Blackcurrant Jam', 'Polished Oak', 'Vanilla'],
        description: ['Finished in deep charred oak before bottling straight from the cask, this non chill-filtered expression combines subtle wood and vanilla flavours with a full-bodied spicy fruit aroma.'],
        image: 'https://www.whiskyshop.com/media/catalog/product/g/l/glen_scotia_victoriana_new_packaging_ps.jpg?width=700&height=700&store=whiskyshop&image-type=image',
    },
    {
        id:22,
        name: 'Glen Scotia 12',
        region: 'Campbeltown',
        abv: '46%',
        price: '46.00',
        age: '12',
        palate: ['Tropical Fruit', 'Vanilla', 'Oak', 'Warming Spice'],
        description: 'Matured in first-fill bourbon casks, it was bottled at 46% ABV. This expression stands as a proud tribute to Glen Scotia’s heritage and the enduring spirit of one of Scotland’s most historic whisky regions.',
        image: 'https://www.whiskyshop.com/media/catalog/product/g/l/glen_scotia_12yo_ps.jpg?width=700&height=700&store=whiskyshop&image-type=image',    
    },
    {
        id: 23,
        name: 'Auchentoshan Three Wood',
        region: 'Lowland',
        abv: '43%',
        price: '49.25',
        age: 'Non-Age Statement',
        palate: ['Blackberry', 'Orange', 'Prunes', 'Raisins'],
        description: ['The ever-popular Auchentoshan 3 Wood is matured initially in bourbon casks before being finished in Oloroso then Pedro Ximenez casks for an extra layer of rich, sweet fruitiness.'],
        image: 'https://img.thewhiskyexchange.com/1400/aucob.non2.jpg?v=20261019',

    },
    {
        id: 24,
        name: 'Glenkinchie 12',
        region: 'Lowland',
        abv: '43%',
        price: '44.95',
        age: '12',
        palate: ['Orange', 'Honey', 'Fruit Cake', 'Malt', 'Vanilla'],
        description: ['Replacing the 10 year-old as the main expression of the Lowland style in the Classic Malts range, this Glenkinchie 12yo is a bit fuller and more complex.'],
        image: 'https://img.thewhiskyexchange.com/1400/gkcob.12yov1.jpg?v=20261019',
    }



]    


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('navToggleBtn').addEventListener('click', ()=> {
        const btn = document.getElementById('navToggleBtn');
        const nav = document.getElementById('mainNav');
        btn.setAttribute('aria-expanded', nav.classList.toggle('active'));

    });

    const select = document.getElementById('whiskySelect');
    if(select) {
        WHISKIES.forEach (w=> { 
            select.innerHTML += `<option value="${w.id}">${w.name} (${w.region})</option>`;
        });
    
    }    
    renderCards(WHISKIES);


    document.getElementById('whiskySearchForm').addEventListener('submit', e => {e.preventDefault(); filterWhiskies();});
    document.getElementById('regionSelect').addEventListener('change', filterWhiskies);
    document.getElementById('priceRange').addEventListener('input', e=> {
        document.getElementById('priceDisplay').textContent = `£${e.target.value}`;
        filterWhiskies();
    });
    document.getElementById('sortBy').addEventListener('change', filterWhiskies);
    document.getElementById('resetFiltersBtn').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('regionSelect').value = 'all';
        document.getElementById('priceDisplay').textContent = '£350';
        document.getElementById('sortBy').value =  'name-asc';
        renderCards(WHISKIES);
    }); 

    document.getElementById('closeModalBtn').addEventListener('click', () => document.getElementById('whiskyModal').classList.add('hidden'));
    document.getElementById('modalOverlay').addEventListener('click', () => document.getElementById('whiskyModal').classList.add('hidden'));
    document.getElementById('tastingNoteForm').addEventListener('submit', handleForm);

    fetch('https://freetestapi.com/api/v1/movies').catch(() => {});

});
function renderCards(list){
    const grid = document.getElementById('whiskyGrid');
    if(!grid) return;
    grid.innerHTML = list.length ? '': '<p style = "grid-column:1/-1;" text-allign:center;"No whiskies found.</p>';
    list.forEach (w =>{
        grid.innerHTML += `
            <article class = 'whisky-card'>
                <div class = 'card-image-wrapper'>
                    <img src= '${w.image} alt ='${w.name}' loading = 'lazy'>
                    <span class = 'badge-region'>${w.region}</span>
                </div>
                <div class ='card-content'>
                    <h3 class='card-title'>${w.name}</h3>
                    <div class = 'card-meta'>
                        <span class= 'card-price'>£${w.price}</span>
                    </div>
                    <div class = "tag-list"> ${w.palate.map(p => `<span class= "tag">${p}</span>`).join('')}</div>
                    <button class = 'btn btn-secondary' onclick='openModal(${w.id})'>View Notes</button>
                </div>
            </article>
        `;            


    });
    document.getElementById('statusMessage').testContent = 'Showing ${list.length} whiskies.';

}
function filterWhiskies() {
    const term= document.getElementById('searchInput').value.toLowerCase().trim();
    const region = document.getElementById('regionSelect').value;
    const maxPrice = parseFloat(document.getElementById('priceRange').value);
    const sort = document.getElementById('sortBy').value;

    let res = WHISKIES.filter(w => (w.name.toLowerCase().includes(term) || w.palate.some(p => p.toLowerCase().includes(term))) && (region === 'all' || w.region.toLowerCase() === region.trim().toLowerCase()) && w.price <=maxPrice);

    res.sort((a,b) => {

        if (sort === 'price-asc') return Number (a.price) - Number(b.price);
        if (sort === 'price-desc') return Number(b.price)- Number(a.price);
        return a.name.localeCompare(b.name);
    });        
    renderCards(res);


function openModal(id) {
    const w=WHISKIES.find(item => item.id === id);
    if (!w) return;
    document.getElementById('modalBody').innerHTML = `
        <h2 id="modalTitle" style= "color: var(--primary); margin-bottom: 0.4rem;">${w.name}</h2>
        <p style="color: var(--secondary); font-weight: bold; margin-bottom: 0.75rem;"> ${w.region} £${w.price}</p>
        <p style= "margin-bottom: 0.75rem;">${w.description}</p>
        <p><strong> Palate: </strong>${w.palate.join(', ')} </p>
        <p><strong> ABV:</strong> ${w.abv} | <strong>Age:</strong> ${w.age}</p>
    `;
    document.getElementById('whiskyModal').classList.remove('hidden');
    
}
function handleForm(e) {
    e.preventDefault();
    const name = document.getElementById('userName');
    const sel = document.getElementById('whiskySelect');
    const notes = document.getElementById('tastingNotesTest');
    let ok= true;

    document.querySelectorAll('.error-text').forEach(el => el.textContent = '');
    document.querySelectorAll('.form-group').forEach(el => el.classList.remove('invalid'));

    if(name.value.trim().length <2) {showError(name, 'userNameError', 'Enter at least two characters, perhaps initials?'); ok = false;}
    if(!sel.value) {showError(sel, 'whiskySelectError', 'Select a whisky'); ok = false;}
    if(notes.value.trim().length <10) {showError(notes, 'notesError', 'Enterat least ten characters'); ok = false;}

    if  (ok) {
        const msg = document.getElementById('formSuccessMessage');
        msg.classList.remove('hidden');
        document.getElementById('tastingNoteForm').reset();
        setTimeout(() => msg.classList.add('hidden'),2000);
    }
}
function showError(el, errID, text) {
    document.getElementById(errID).textContent = text;
    el.closest('.form-group').classList.add('invalid');
    
}}
const welcomeBox = document.getElementById('welcomeBox');
const clickBtn = document.getElementById('clickBtn');
const cardBtn = document.getElementById('cardBtn');
const heroCard = document.getElementById('heroCard');
const introContainer = document.getElementById('intro-container');
const cardBox = document.getElementById('cardBox');
const quoteCardContainer = document.getElementById('quoteCard-container');
const resetBtn = document.getElementById('resetBtn');

const modal = document.getElementById('quoteModal');
const closeModalBtn = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalText = document.getElementById('modalText');

const cardDetails = {
    1: "Heartbreak is a slow, suffocating poison that turns the simple act of existing into a quiet, agonizing ritual. It is a physical, hollow ache rooted deep beneath your ribs: a ghost of a feeling that throbs with every reluctant beat. You sit in the dark, bathed in the pale, indifferent light of midnight, listening to the deafening silence of a room that once held laughter. Loving them was not a mistake, but it became your total ruin. You drag your hand over the empty side of the bed, feeling only the cold fabric that mirrors the temperature of your own soul. Every breath feels impossibly heavy, like dragging shattered glass through your lungs, while your mind endlessly rewinds the phantom tapes of what used to be. There is no nobility in this suffering, no poetic grace in the way your chest collapses under the weight of their absence. You have done what it was meant to be done. The moments you and your soulmate once shared have now become part of your memory that you are willing to keep. Nobody knows what you have sacrificed throughout the entire moment, yet you know exactly how you did that. Maybe you two had different perspectives back then.  Your heart followed what you ordered; it poured out everything it had. For now, you can’t blame your heart just because things didn’t work out. You gave so much effort to someone; now it’s time for you to love yourself and honor your efforts. The past can’t be changed; learn from the past, try to be a better person, and live well.",
    2: "When they walked away, they did not just leave; they drained every drop of color from your skies and left you wandering through a hollow, monochrome wasteland. Every corner of your room feels like a grave marker for a promise that turned to dust. The songs you used to share sound like cruel dirges, and the cold cup of tea in your hands offers no warmth against the winter settling inside your chest. How do you reclaim a world when every inch of it is haunted by a shadow you cannot touch? Your reflection in the window looks like a stranger's hollow-eyed and worn down by a solitude that feels less like space and more like a cage. You try to walk through the mechanical routines of your day, but you are merely a ghost haunting your own life, moving numb limbs through a fog of endless grief. The things that once brought you peace now taste like bitter ash on your tongue. Reclaiming your world does not feel like a grand, triumphant victory; it feels like staggering through the charred remains of a home you once loved, trying to gather slivers of sharp glass with bare, trembling hands. You are far too tired to rebuild. The sheer effort of occupying your own skin feels like an insurmountable, suffocating task. Yet here you stand in the quiet, bitter cold, forced to breathe the air of an indifferent universe that went on spinning after your entire foundation crumbled into nothingness.",
    3: "They tell you that time heals all wounds, but time right now feels like a stagnant, black ocean in which you are slowly, helplessly drowning. Healing is not a soft, poetic blooming under a gentle spring sun; it is a violent, jagged process of tearing open old scars every time a stray memory hits you in the dark. Some days you drag your exhausted body into the daylight, pretending the numbness is peace, only to collapse back into the suffocating abyss the moment you are alone. There is a deep, bone-weary fatigue in trying to survive your own thoughts. You are tired of being strong, tired of waiting for a dawn that never arrives, and tired of the relentless aching in your chest that greets you every morning like an unpaid debt. Growth here feels less like a flower opening to the sky and more like a pale root desperately pushing through dry, unyielding stone in search of water that isn't there. If you cannot bloom today, then simply sit in the rot. Allow yourself to be broken without the exhausting demand to fix it. Trusting the timing of your life feels like a cruel joke when every second drags like heavy iron chains across a stone floor, but even in this dark, stagnant soil, your quiet endurance is a silent refusal to completely vanish into the shadows that threaten to consume you.",
    4: "Not every ending is a loss; sometimes it is just life closing a door so you don't stay trapped in a space where you will eventually lose yourself. The door did not just close; it slammed with a brutal finality that shattered the quiet sanctuary of your future. Looking ahead into the unwritten chapters of your life does not bring a sense of wonder: it brings a cold, paralyzing dread. The pages ahead stretch out like a vast, frozen desert, empty, white, and terrifyingly quiet. All the unwritten tomorrows you so carefully envisioned: the quiet mornings, the shared laughter, the warm light in a home built for two—have dissolved into bitter smoke. You are left standing at the edge of an abyss you never chose to reach, forced to write a story you never wanted to tell. The unknown is not a promise; it is a void that swallows your voice when you scream into the dark. How are you supposed to care about future mornings when tonight feels like a slow, agonizing execution? Every step forward feels like a betrayal of the past, yet standing still only lets the frost settle deeper into your blood and bones. You walk into this dark, unwritten wasteland not with hope in your heart, but with the heavy, dragging steps of someone who has no other choice but to keep stumbling through the shadows. You carry the cold ghost of a future that died before it ever had the chance to live.",
    5: "In the darkest, most suffocating hour before the dawn, when the silence presses against your temples like a physical weight, you are left with nothing but the raw, shivering truth of your solitude. It feels almost impossible to promise yourself love when your mind is a raging storm of self-doubt, rejection, and bitter regret. You feel discarded, worn down to a fraying thread, and utterly consumed by the darkness that has taken root in your soul. Promises of bright futures and gentle healing feel like insults against the sheer magnitude of your pain. So do not promise to be whole. Do not promise to be happy. Instead, make a quiet, desperate covenant with the broken fragments of your spirit: promise only to endure. Promise to hold your own shivering form in the dark while the storm rages outside. Promise that even when your chest feels completely hollow and your soul is bruised beyond recognition, you will not let the darkness extinguish the tiny, stubborn ember of your existence. You are allowed to be a tragic, ruined mess tonight. You are allowed to weep until there are no tears left in your body. Just promise to stay, to bleed through the shadows, and to survive until the cold gray morning breaks over your weary head."
};

// Utility function to strip previous fade animation classes
function clearTransitions(element) {
    if (element) {
        element.classList.remove('transition-fade-in', 'transition-fade-out');
    }
}

// Step 1: Welcome Button Click -> Fade out welcome screen, reveal Hero section
clickBtn.addEventListener('click', () => {
    clearTransitions(welcomeBox);
    welcomeBox.classList.add('transition-fade-out');

    setTimeout(() => {
        welcomeBox.classList.add('hidden');
        clickBtn.classList.add('hidden');
        clearTransitions(welcomeBox);

        heroCard.classList.remove('hidden');
        introContainer.classList.remove('hidden');
        cardBox.classList.remove('hidden');

        clearTransitions(heroCard);
        clearTransitions(introContainer);
        clearTransitions(cardBox);

        heroCard.classList.add('transition-fade-in');
        introContainer.classList.add('transition-fade-in');
        cardBox.classList.add('transition-fade-in');

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 60,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#ffcad4', '#ffb7b2', '#e0bbe4', '#fff1e6']
            });
        }
    });
});

// Step 2: Plaster Card Click -> Fade out Hero section, reveal Quote cards & Reset button
cardBtn.addEventListener('click', () => {
    clearTransitions(heroCard);
    clearTransitions(introContainer);
    clearTransitions(cardBox);

    heroCard.classList.add('transition-fade-out');
    introContainer.classList.add('transition-fade-out');
    cardBox.classList.add('transition-fade-out');

    setTimeout(() => {
        heroCard.classList.add('hidden');
        introContainer.classList.add('hidden');
        cardBox.classList.add('hidden');

        clearTransitions(heroCard);
        clearTransitions(introContainer);
        clearTransitions(cardBox);

        quoteCardContainer.classList.remove('hidden');
        resetBtn.classList.remove('hidden');

        clearTransitions(quoteCardContainer);
        clearTransitions(resetBtn);

        quoteCardContainer.classList.add('transition-fade-in');
        resetBtn.classList.add('transition-fade-in');

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150, // Massive amount of particles
                spread: 150,        // 180 degrees forces it to shoot far left and far right
                startVelocity: 55,  // Fast speed to reach the edges of the screen
                scalar: 1,        // Makes the confetti pieces slightly larger
                origin: { x: 0.5, y: 0.5 }, // Exact center of the screen
                colors: [
                    '#ffcad4', '#ffb7b2', '#f7d6d0', // Background pinks & light peach
                    '#c8b6ff', '#9b5de5', '#d8bbff', '#7209b7', // Original purple accents
                    '#B9AAFB', '#3A2E4C', '#5A3E6D', // Added deep purple & lavender tones
                    '#E8A598' // Added RGB(232, 165, 152) warm terracotta tone
                ]
            });
        }
    });
});

// Step 3: Reset Button Click -> Fade out Quote cards, fully restore initial Welcome screen
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        clearTransitions(quoteCardContainer);
        clearTransitions(resetBtn);

        quoteCardContainer.classList.add('transition-fade-out');
        resetBtn.classList.add('transition-fade-out');

        setTimeout(() => {
            // Hide quote container and reset button
            quoteCardContainer.classList.add('hidden');
            resetBtn.classList.add('hidden');

            clearTransitions(quoteCardContainer);
            clearTransitions(resetBtn);

            // Restore Welcome container AND button inside it
            welcomeBox.classList.remove('hidden');
            clickBtn.classList.remove('hidden');

            clearTransitions(welcomeBox);
            clearTransitions(clickBtn);

            welcomeBox.classList.add('transition-fade-in');

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Handle initial overlay fade out
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("pageTransition");
    if (overlay) {
        overlay.classList.add("fade-out");
    }
});

document.querySelectorAll('.read-me').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.quoteCard');

        // Extract title string excluding image tag
        const fullTitle = card.querySelector('.quoteTitle').childNodes[0].textContent.trim();
        const imgSrc = card.querySelector('.quoteImage').src;

        modalTitle.textContent = fullTitle;
        modalImage.src = imgSrc;
        modalText.textContent = cardDetails[index + 1];

        modal.classList.remove('hidden');
    });
});

// Close Modal on Close Button Click
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Close Modal when clicking background overlay
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});
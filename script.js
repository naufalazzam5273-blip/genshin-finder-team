const characterData = [
    {
        name: "Ganyu",
        element: "Cryo",
        teams: [
            {
                teamName: "Freeze Team",
                members: ["Ganyu", "Sangonomiya Kokomi", "Kaedehara Kazuha", "Shenhe"],
                explanation: "Ganyu sebagai DPS utama. Kokomi memberikan aura Hydro untuk Freeze, Kazuha mengumpulkan musuh dan memberikan buff damage, dan Shenhe memberikan buff damage Cryo.",
                reactions: ["Frozen (Cryo + Hydro)", "Swirl (Anemo + Hydro/Cryo)"]
            },
            {
                teamName: "Melt Team",
                members: ["Ganyu", "Xiangling", "Bennett", "Zhongli"],
                explanation: "Tim ini fokus pada reaksi Melt yang memberikan damage besar. Xiangling memberikan aura Pyro off-field, Bennett memberikan buff ATK, dan Zhongli memberikan perisai untuk keamanan.",
                reactions: ["Melt (Cryo + Pyro)"]
            }
        ]
    },
    {
        name: "Raiden Shogun",
        element: "Electro",
        teams: [
            {
                teamName: "Hypercarry",
                members: ["Raiden Shogun", "Bennett", "Kujou Sara", "Kaedehara Kazuha"],
                explanation: "Raiden sebagai DPS utama yang didukung penuh oleh Bennett dan Kujou Sara untuk buff ATK, dan Kazuha untuk buff damage dan pengurangan resistensi.",
                reactions: ["Overloaded (Electro + Pyro)", "Swirl (Anemo + Electro/Pyro)"]
            },
            {
                teamName: "National Team",
                members: ["Raiden Shogun", "Xingqiu", "Xiangling", "Bennett"],
                explanation: "Tim serba guna dengan sinergi yang luar biasa. Raiden memberikan energi untuk seluruh tim, sementara Xingqiu dan Xiangling memberikan damage besar off-field.",
                reactions: ["Vaporize (Hydro + Pyro)", "Overloaded (Electro + Pyro)", "Electro-Charged (Hydro + Electro)"]
            }
        ]
    },
    {
        name: "Nahida",
        element: "Dendro",
        teams: [
            {
                teamName: "Hyperbloom",
                members: ["Nahida", "Xingqiu", "Kuki Shinobu", "Fischl"],
                explanation: "Nahida memicu Bloom dengan Hydro dari Xingqiu. Kemudian Kuki atau Fischl memicu reaksi Hyperbloom untuk menghasilkan proyektil damage yang sangat cepat.",
                reactions: ["Bloom (Dendro + Hydro)", "Hyperbloom (Dendro Core + Electro)"]
            },
            {
                teamName: "Spread/Aggravate",
                members: ["Nahida", "Fischl", "Yae Miko", "Zhongli"],
                explanation: "Tim ini fokus pada damage Dendro dan Electro. Nahida dan Fischl/Yae memicu Quicken, lalu memberikan damage besar dengan reaksi Spread (Dendro) atau Aggravate (Electro).",
                reactions: ["Quicken (Dendro + Electro)", "Spread (Quicken + Dendro)", "Aggravate (Quicken + Electro)"]
            }
        ]
    },
    {
        name: "Hu Tao",
        element: "Pyro",
        teams: [
            {
                teamName: "Vaporize Team",
                members: ["Hu Tao", "Xingqiu", "Yelan", "Zhongli"],
                explanation: "Hu Tao sebagai DPS utama memicu reaksi Vaporize dengan Hydro dari Xingqiu dan Yelan. Zhongli memberikan perisai yang kuat agar Hu Tao bisa bertarung dengan aman.",
                reactions: ["Vaporize (Pyro + Hydro)"]
            }
        ]
    }
];

const characterSelect = document.getElementById('character-select');
const resultsContainer = document.getElementById('results-container');

// Mengisi dropdown dengan data karakter
function populateCharacterSelect() {
    characterData.forEach(character => {
        const option = document.createElement('option');
        option.value = character.name;
        option.textContent = character.name;
        characterSelect.appendChild(option);
    });
}

// Menampilkan rekomendasi tim
function showTeamRecommendations(characterName) {
    resultsContainer.innerHTML = '';
    
    const character = characterData.find(c => c.name === characterName);

    if (character) {
        character.teams.forEach(team => {
            const teamCard = document.createElement('div');
            teamCard.classList.add('team-card');

            const teamTitle = document.createElement('h3');
            teamTitle.textContent = team.teamName;
            teamCard.appendChild(teamTitle);

            const teamMembersList = document.createElement('ul');
            team.members.forEach(member => {
                const memberItem = document.createElement('li');
                memberItem.textContent = member;
                teamMembersList.appendChild(memberItem);
            });
            teamCard.appendChild(teamMembersList);

            const explanation = document.createElement('p');
            explanation.textContent = team.explanation;
            teamCard.appendChild(explanation);

            const reactions = document.createElement('p');
            reactions.classList.add('reactions');
            reactions.textContent = `Reaksi Elemen: ${team.reactions.join(', ')}`;
            teamCard.appendChild(reactions);

            resultsContainer.appendChild(teamCard);
        });
    }
}

// Event listener untuk saat pilihan karakter berubah
characterSelect.addEventListener('change', (event) => {
    const selectedCharacter = event.target.value;
    if (selectedCharacter) {
        showTeamRecommendations(selectedCharacter);
    } else {
        resultsContainer.innerHTML = '';
    }
});

// Panggil fungsi untuk mengisi dropdown saat halaman dimuat
populateCharacterSelect();

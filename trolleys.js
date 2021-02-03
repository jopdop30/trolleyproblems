var productions = {
    "S": [["You see a trolley rushing towards ", "SOMETHING", ". In front of you is a lever, which lets you redirect the trolley towards ", "SOMETHING", " instead."]],
    "SOMETHING": [
        ["SOMETHING", " and ", "SOMETHING"],
        ["THING"],
        ["PERSON"],
        ["PERSON", " clutching ", "THING"],
        ["SPECIFIC_PERSON"],
        ["SPECIFIC_PERSON", " clutching ", "THING"]
    ],
    "THING": [
        ["the coffee mug Mr Gault lost"],
        ["James\' calculator"],
        ["the Mona Lisa"],
        ["the box containing all of the year 12 jerseys"],
        ["the last real-life dinosaur"],
        ["your phone"],
        ["the only existing copy of the Bible"],
        ["the only existing copy of a formula that grants immortality"],
        ["the only existing copy of the design for a machine that can artificially induce perfect happiness"],
        ["the only existing copy of a definitive proof of the existence of God"],
        ["the only existing copy of a definitive proof of the inexistence of God"],
        ["your laptop"]
    ],
    "PERSON": [
        ["a random person"],
        ["a newborn baby"],
        ["a murderer"],
        ["a rapist"],
        ["a clone of Hitler"],
        ["an overweight person"],
        ["an utilitarian"],
        ["a virtue ethicist"],
        ["a person sexually aroused by the idea of being killed by a trolley"],
        ["a clone of you"],
        ["a kitten"],
        ["a person who earlier flipped another lever preventing the trolley from hitting ", "SOMETHING"]
    ],
    "SPECIFIC_PERSON": [
        ["you"],
        ["your mother"],
        ["your father"],
        ["Hitler"],
        ["Stalin"],
        ["Jesus of Nazareth"],
        ["your ex"],
        ["a version of you that happened to make all the right decisions in their life"],
        ["the trolley safety inspector whose inattention to detail caused the runaway trolley"],
        ["the trolley safety inspector whose inattention to detail - caused by grief over the recent death of his wife - caused the runaway trolley"],
        ["the trolley manufacturer executive who decided to, as a cost-cutting measure, leave out safety interlocks that would have prevented this runaway trolley"],
        ["the trolley manufacturer executive who decided to, as a cost-cutting measure in a last-ditch attempt to save her struggling company employing thousands of people, leave out safety interlocks that would have prevented this runaway trolley"],
        ["Nizzagrallaaf, a malicious imp that causes runaway trolleys"],
        ["the villain who set the trolley in motion with murderous intent"],
        ["Brooke"],
        ["Tylah"],
        ["Kirsten"],
        ["Hayley"],
        ["James"],
        ["Mr Gualt"],
        ["Bao"],
        ["Nicholas"],
        ["Angus"]
    ]
};

function initial_state() {
    return {"output": ["S"], "used_productions": []};
}

function pick(values) {
    return values[Math.floor(Math.random() * values.length)];
}

function produce(state) {
    for (var i = 0; i < state.output.length; i++) {
        if (productions[state.output[i]]) {
            var choice = null;
            while (!choice || state.used_productions.indexOf(choice) != -1) {
                choice = pick(productions[state.output[i]]);
            }
            state.output = state.output.slice(0, i).concat(choice).concat(state.output.slice(i + 1));
            state.used_productions.push(choice);
            return true;
        }
    }
    return false;
}

function generate() {
    var state = initial_state();
    while (produce(state));
    return state.output.join("");
}

function trolley(element_id) {
    document.getElementById(element_id).innerHTML = generate();
}

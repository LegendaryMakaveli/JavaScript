const {power, toggleButton, currentTemperature, increaseButton, decreaseButton} = require('../SourceCode/AirCondition');

describe("Test for my new Hisense air condition", () => {
    test("should power off", () => {
        expect(power()).toBe(false);    // the air condition is off
    }); 
    test("test that i can on my air condition", () => {
        expect(power()).toBe(false);    // the air condition is off
        toggleButton();         // i press the button to on the air condition
        expect(power()).toBe(true);      // the air condition is on
        toggleButton();     // i press the button to off the air condition
    });
    test("test to check if we can on and off the air condition", () => {
        toggleButton();   // i press the button to on the air condition
        toggleButton();   // i press the button to off the air condition
        expect(power()).toBe(false);    // the air condition is off
    });
});

describe("Test for temperature increment", () => {
    test("test to check my default temperature", () => {
        toggleButton();
        expect(currentTemperature()).toBe(24);
        toggleButton();
    });

    test("test if my ac can increase the temperature", () => {
        toggleButton();
        expect(currentTemperature()).toBe(24);
        increaseButton();
        expect(currentTemperature()).toBe(23);
        toggleButton();
    });

    test("test that i cannot increase ac temperature without power on", () => {
        expect(()=> {
            throw new Error("Ac is not on")
        }).toThrow(increaseButton());
    });
    
    test("test that once the ac on and it's in highest it cannot increase again", () => {
        toggleButton();
        for(let count = 1; count < 6; count++){
             increaseButton();
        }
        expect(()=> {
            throw new Error("Ac is Ac cannot be higher than this on");
        }).toThrow(increaseButton());
        toggleButton();
    });
});

describe("test for temperature decrement", () => {
    test("test to check my default temperature", () => {
        toggleButton(); 
        expect(currentTemperature()).toBe(16);
        toggleButton();
    });

    test("test if my ac can decrease the temperature", () => {
        toggleButton();
        expect(currentTemperature()).toBe(16);
        decreaseButton();
        expect(currentTemperature()).toBe(17);
        toggleButton();
    });

    test("test that i cannot decrease ac temperature without power on", () => {
        expect(()=> {
            throw new Error("Ac is not on")
        }).toThrow(decreaseButton());
    });

    test("test that once the ac on and it's in lowest it cannot decrease again", () => {
        toggleButton();
        for(let count = 1; count < 12; count++){
             decreaseButton();
        }
        expect(currentTemperature()).toBe(29);
        expect(()=> {
            throw new Error("Ac is Ac cannot be lower than this on");
        }).toThrow(decreaseButton());
        toggleButton();
    });
});
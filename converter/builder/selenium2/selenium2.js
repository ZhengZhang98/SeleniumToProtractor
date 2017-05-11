/**
 * Data structure representing Selenium 2. Use "builder.selenium2" to refer to Selenium 2, as
 * opposed to a string or numerical representation. builder.selenium1 and builder.selenium2 both
 * export a stepTypes map and a categories list that have the same interface so that most code
 * doesn't have to know which version of Selenium is being used.
 */

builder.selenium2 = {
  toString: function() { return "__SELENIUM_2__"; },
  name: "Selenium 2",
  shortName: "sel2"
};

builder.seleniumVersions.push(builder.selenium2);

builder.selenium2.StepType = function(name) {
  this.name = name;
};

builder.selenium2.StepType.prototype = {
  /** @return The type's name. */
  getName: function() { return this.name; },
  /** @return List of parameter names. */
  getParamNames: function() { return builder.selenium2.__stepData[this.name] },
  /** @return Whether the given parameter is a "locator" or "string". */
  getParamType: function(paramName) { return paramName.toLowerCase().indexOf("locator") != -1 ? "locator" : "string" },
  /** @return Whether setting negated to true on a step of this type is valid. */
  getNegatable: function() {
    return this.name.startsWith("waitFor") ||
           this.name.startsWith("assert") ||
           this.name.startsWith("verify");
  },
  /** @return The note text for this step type, if any. */
  getNote: function() { return builder.selenium2.__stepNotes[this.name] ? _t(builder.selenium2.__stepNotes[this.name]) : null; }
};

/** Internal step data - converted into stepTypes below. */
builder.selenium2.__stepData = {
  "get":                             ["url"], 
  "goBack":                          [], 
  "goForward":                       [], 
  "clickElement":                    ["locator"], 
  "setElementText":                  ["locator", "text"], 
  "sendKeysToElement":               ["locator", "text"], 
  "clickElementWithOffset":          ["locator", "offset"],
  "doubleClickElement":              ["locator"],
  "mouseOverElement":                ["locator"],
  "dragToAndDropElement":            ["locator", "targetLocator"], 
  "clickAndHoldElement":             ["locator"], 
  "releaseElement":                  ["locator"], 
  "setElementSelected":              ["locator"], 
  "clearSelections":                 ["locator"], 
  "setElementNotSelected":           ["locator"], 
  "submitElement":                   ["locator"], 
  "close":                           [], 
  "refresh":                         [], 
  "assertTextPresent":               ["text"], 
  "verifyTextPresent":               ["text"], 
  "waitForTextPresent":              ["text"], 
  "storeTextPresent":                ["text", "variable"], 
  "assertBodyText":                  ["text"], 
  "verifyBodyText":                  ["text"], 
  "waitForBodyText":                 ["text"], 
  "storeBodyText":                   ["variable"], 
  "assertElementPresent":            ["locator"], 
  "verifyElementPresent":            ["locator"], 
  "waitForElementPresent":           ["locator"], 
  "storeElementPresent":             ["locator", "variable"], 
  "assertPageSource":                ["source"], 
  "verifyPageSource":                ["source"], 
  "waitForPageSource":               ["source"], 
  "storePageSource":                 ["variable"], 
  "assertText":                      ["locator", "text"], 
  "verifyText":                      ["locator", "text"], 
  "waitForText":                     ["locator", "text"], 
  "storeText":                       ["locator", "variable"], 
  "assertCurrentUrl":                ["url"], 
  "verifyCurrentUrl":                ["url"], 
  "waitForCurrentUrl":               ["url"], 
  "storeCurrentUrl":                 ["variable"], 
  "assertTitle":                     ["title"], 
  "verifyTitle":                     ["title"], 
  "waitForTitle":                    ["title"], 
  "storeTitle":                      ["variable"], 
  "assertElementAttribute":          ["locator", "attributeName", "value"], 
  "verifyElementAttribute":          ["locator", "attributeName", "value"], 
  "waitForElementAttribute":         ["locator", "attributeName", "value"], 
  "storeElementAttribute":           ["locator", "attributeName", "variable"], 
  "assertElementStyle":              ["locator", "propertyName", "value"], 
  "verifyElementStyle":              ["locator", "propertyName", "value"], 
  "waitForElementStyle":             ["locator", "propertyName", "value"], 
  "storeElementStyle":               ["locator", "propertyName", "variable"],
  "assertElementSelected":           ["locator"], 
  "verifyElementSelected":           ["locator"], 
  "waitForElementSelected":          ["locator"], 
  "storeElementSelected":            ["locator", "variable"], 
  "assertElementValue":              ["locator", "value"], 
  "verifyElementValue":              ["locator", "value"], 
  "waitForElementValue":             ["locator", "value"], 
  "storeElementValue":               ["locator", "variable"], 
  "addCookie":                       ["name", "value", "options"], 
  "deleteCookie":                    ["name"], 
  "assertCookieByName":              ["name", "value"], 
  "verifyCookieByName":              ["name", "value"], 
  "waitForCookieByName":             ["name", "value"], 
  "storeCookieByName":               ["name", "variable"], 
  "assertCookiePresent":             ["name"], 
  "verifyCookiePresent":             ["name"], 
  "waitForCookiePresent":            ["name"], 
  "storeCookiePresent":              ["name", "variable"], 
  "saveScreenshot":                  ["file"], 
  "print":                           ["text"], 
  "store":                           ["text", "variable"],
  "pause":                           ["waitTime"],
  "switchToFrame":                   ["identifier"],
  "switchToFrameByIndex":            ["index"],
  "switchToWindow":                  ["name"],
  "switchToWindowByIndex":           ["index"],
  "switchToWindowByTitle":           ["title"],
  "switchToDefaultContent":          [],
  "assertAlertText":                 ["text"],
  "verifyAlertText":                 ["text"],
  "waitForAlertText":                ["text"],
  "storeAlertText":                  ["variable"],
  "assertAlertPresent":              [],
  "verifyAlertPresent":              [],
  "waitForAlertPresent":             [],
  "storeAlertPresent":               ["variable"],
  "answerAlert":                     ["text"],
  "acceptAlert":                     [],
  "dismissAlert":                    [],
  "assertEval":                      ["script", "value"],
  "verifyEval":                      ["script", "value"],
  "waitForEval":                     ["script", "value"],
  "storeEval":                       ["script", "variable"],
  "setWindowSize":                   ["width", "height"]
};

builder.selenium2.__stepNotes = {
  "assertAlertText": 'sel2_must_playback_in_foreground',
  "verifyAlertText": 'sel2_must_playback_in_foreground',
  "waitForAlertText": 'sel2_must_playback_in_foreground',
  "storeAlertText": 'sel2_must_playback_in_foreground',
  "assertAlertPresent": 'sel2_must_playback_in_foreground',
  "verifyAlertPresent": 'sel2_must_playback_in_foreground',
  "waitForAlertPresent": 'sel2_must_playback_in_foreground',
  "storeAlertPresent": 'sel2_must_playback_in_foreground',
  "answerAlert": 'sel2_must_playback_in_foreground',
  "acceptAlert": 'sel2_must_playback_in_foreground',
  "dismissAlert": 'sel2_must_playback_in_foreground',
  "setWindowSize": 'sel2_must_playback_in_foreground'
};

/** Map of step types. */
builder.selenium2.stepTypes = {};
for (var n in builder.selenium2.__stepData) {
  builder.selenium2.stepTypes[n] = new builder.selenium2.StepType(n);
}

builder.selenium2.defaultStepType = builder.selenium2.stepTypes.clickElement;
builder.selenium2.navigateToUrlStepType = builder.selenium2.stepTypes.get;




if (builder && builder.loader && builder.loader.loadNextMainScript) { builder.loader.loadNextMainScript(); }

builder.translate = {};

builder.translate.DEFAULT_LOC_NAME = "en";
builder.translate.locName = builder.translate.DEFAULT_LOC_NAME;
builder.translate.newLocName = builder.translate.DEFAULT_LOC_NAME;
builder.translate.locales = {};

builder.translate.getLocNamePref = function() {
    return builder.translate.DEFAULT_LOC_NAME;
};

builder.translate.setNewLocaleName = function(locName) {
  builder.translate.newLocName = locName;
};

builder.translate.addLocale = function(l) {
  builder.translate.locales[l.name] = l;
};

builder.translate.getLocaleName = function() {
  return builder.translate.locName;
};

builder.translate.getEffectiveLocaleName = function() {
  if (!builder.translate.locales[builder.translate.locName]) {
    if (builder.translate.locName.indexOf('_') != -1) {
      if (builder.translate.locales[builder.translate.locName.split('_')[0]]) {
        return builder.translate.locName.split('_')[0];
      }
    }
    return builder.translate.DEFAULT_LOC_NAME;
  }
  return builder.translate.locName;
};

builder.translate.getNewLocaleName = function() {
  return builder.translate.newLocName;
};

builder.translate.getEffectiveNewLocaleName = function() {
  if (!builder.translate.locales[builder.translate.newLocName]) {
    if (builder.translate.newLocName.indexOf('_') != -1) {
      if (builder.translate.locales[builder.translate.newLocName.split('_')[0]]) {
        return builder.translate.newLocName.split('_')[0];
      }
    }
    return builder.translate.DEFAULT_LOC_NAME;
  }
  return builder.translate.newLocName;
};

builder.translate.setLocaleName = function(locName) {
  builder.translate.locName = locName;
};

builder.translate.getAvailableLocales = function() {
  var ls = [];
  for (var k in builder.translate.locales) {
    var v = builder.translate.locales[k];
    if (v.mapping) {
      ls.push(v);
    }
  }
  return ls;
};


var locName = builder.translate.getLocNamePref();
builder.translate.locName = locName;
builder.translate.newLocName = locName;

builder.translate.translateStepName = function(stepName) {
  return builder.translate.translateStepNameTo(stepName, builder.translate.locName);
};

builder.translate.translateStepNameTo = function(stepName, locName) {
  if (!builder.translate.locales[locName]) {
    if (locName.indexOf('_') != -1) {
      return builder.translate.translateStepNameTo(stepName, locName.split('_')[0]);
    } else {
      return builder.translate.translateStepNameTo(stepName, builder.translate.DEFAULT_LOC_NAME);
    }
  }
  
  var s = builder.translate.locales[locName].mapping['step_' + stepName];
  if (!s) {
    if (locName == builder.translate.DEFAULT_LOC_NAME) {
      return stepName;
    } else {
      if (locName.indexOf('_') != -1) {
        return builder.translate.translateStepNameTo(stepName, locName.split('_')[0]);
      } else {
        return builder.translate.translateStepNameTo(stepName, builder.translate.DEFAULT_LOC_NAME);
      }
    }
  }
  return s;
};

builder.translate.translateParamName = function(paramName, stepName) {
  return builder.translate.translateParamNameTo(paramName, stepName, builder.translate.locName);
};

builder.translate.translateParamNameTo = function(paramName, stepName, locName) {
  if (!builder.translate.locales[locName]) {
    if (locName.indexOf('_') != -1) {
      return builder.translate.translateParamNameTo(paramName, stepName, locName.split('_')[0]);
    } else {
      return builder.translate.translateParamNameTo(paramName, stepName, builder.translate.DEFAULT_LOC_NAME);
    }
  }
  
  var s = builder.translate.locales[locName].mapping['p_' + stepName + '_' + paramName];
  
  if (!s) {
    s = builder.translate.locales[locName].mapping['p_' + paramName];
  }
  if (!s) {
    if (locName == builder.translate.DEFAULT_LOC_NAME) {
      return paramName;
    } else {
      if (locName.indexOf('_') != -1) {
        return builder.translate.translateParamNameTo(paramName, stepName, locName.split('_')[0]);
      } else {
        return builder.translate.translateParamNameTo(paramName, stepName, builder.translate.DEFAULT_LOC_NAME);
      }
    }
  }
  return s;
};

builder.translate.translateStepDoc = function(versionName, stepName, def) {
  return builder.translate.translateStepDocTo(versionName, stepName, def, builder.translate.locName);
};

builder.translate.translateStepDocTo = function(versionName, stepName, def, locName) {
  if (!builder.translate.locales[locName]) {
    if (locName.indexOf('_') != -1) {
      return builder.translate.translateStepDocTo(versionName, stepName, def, locName.split('_')[0]);
    } else {
      return builder.translate.translateStepDocTo(versionName, stepName, def, builder.translate.DEFAULT_LOC_NAME);
    }
  }
  
  var s = builder.translate.locales[locName].mapping[versionName + '_doc_' + stepName];
  
  if (!s) {
    if (locName == builder.translate.DEFAULT_LOC_NAME) {
      return def;
    } else {
      if (locName.indexOf('_') != -1) {
        return builder.translate.translateStepDocTo(versionName, stepName, def, locName.split('_')[0]);
      } else {
        return builder.translate.translateStepDocTo(versionName, stepName, def, builder.translate.DEFAULT_LOC_NAME);
      }
    }
  }
  
  return s;
};

builder.translate.translateParamDoc = function(versionName, stepName, paramName, def) {
  return builder.translate.translateParamDocTo(versionName, stepName, paramName, def, builder.translate.locName);
};

builder.translate.translateParamDocTo = function(versionName, stepName, paramName, def, locName) {
  if (!builder.translate.locales[locName]) {
    if (locName.indexOf('_') != -1) {
      return builder.translate.translateParamDocTo(versionName, stepName, paramName, def, locName.split('_')[0]);
    } else {
      return builder.translate.translateParamDocTo(versionName, stepName, paramName, def, builder.translate.DEFAULT_LOC_NAME);
    }
  }
  
  var s = builder.translate.locales[locName].mapping[versionName + '_doc_' + stepName + '_' + paramName];
  if (!s) {
    if (locName == builder.translate.DEFAULT_LOC_NAME) {
      return def;
    } else {
      if (locName.indexOf('_') != -1) {
        return builder.translate.translateParamDocTo(versionName, stepName, paramName, def, locName.split('_')[0]);
      } else {
        return builder.translate.translateParamDocTo(versionName, stepName, paramName, def, builder.translate.DEFAULT_LOC_NAME);
      }
    }
  }
  
  return s;
};


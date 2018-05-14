/*
 * Grammar for Azure Resource Manager Template Expressions and Functions
 * =====================================================================
 *
 * Based on the documents from the Azure documentation websites [1] and [2].
 *
 * [1] https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-authoring-templates
 * [2] https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-template-functions
 *
 */

/*
 * 0. Initializer
 */

{
  const nodeKind = {
    // Identifiers
    Identifier: "Identifier",

    // Literals
    Integer: "Integer",
    String: "String",
    Object: "Object",
    Array: "Array",

    // Array and object functions
    ArrayFunction: "ArrayFunction",
    CoalesceFunction: "CoalesceFunction",
    ConcatFunction: "ConcatFunction",
    ContainsFunction: "ContainsFunction",
    CreateArrayFunction: "CreateArrayFunction",
    EmptyFunction: "EmptyFunction",
    FirstFunction: "FirstFunction",
    IntersectionFunction: "IntersectionFunction",
    JsonFunction: "JsonFunction",
    LastFunction: "LastFunction",
    LengthFunction: "LengthFunction",
    MinFunction: "MinFunction",
    MaxFunction: "MaxinFunction",
    RangeFunction: "RangeFunction",
    SkipFunction: "SkipFunction",
    TakeFunction: "TakeFunction",
    UnionFunction: "UnionFunction"
  };

  const literalNode = function(kind, location, value) {
    return {
      kind,
      start: location.start.column,
      end: location.end.column,
      value
    };
  }

  const functionNode = function(kind, location, args) {
    return {
      kind,
      start: location.start.column,
      end: location.end.column,
      args 
    };
  }
}

/*
 * 1. Expression
 */

start
  = expression

expression
  = "[" _ func:function _ "]" { return func; }


/*
 * 2. Functions
 */

function
  = arrayFunction
  / coalesceFunction
  / concatFunction
  / containsFunction
  / createArrayFunction
  / emptyFunction
  / firstFunction
  / intersectionFunction
  / jsonFunction
  / lastFunction
  / lengthFunction
  / maxFunction
  / minFunction
  / rangeFunction
  / skipFunction
  / takeFunction
  / unionFunction

/*
 * Array and object functions
 */

// TODO: add arrParam and objectParam
arrayFunction = "array" "(" arg:(intParam/strParam) ")" {
    return functionNode(nodeKind.ArrayFunction, location(), [arg]);
  }
 
coalesceFunction
  = "coalesce" "(" arg1:anyParam restArgs:("," arg:anyParam { return arg; })* ")" {
    return functionNode(nodeKind.CoalesceFunction, location(), [arg1].concat(restArgs));
  }

concatFunction
  = "concat" "(" arg1:(arrParam/strParam) restArgs:("," arg:(arrParam/strParam) { return arg; })* ")" {
    return functionNode(nodeKind.ConcatFunction, location(), [arg1].concat(restArgs));
  }

containsFunction
  = "contains" "(" container:(arrParam/objParam/strParam) "," itemToFind:(strParam/intParam) ")" {
    return functionNode(nodeKind.ContainsFunction, location(), [container].concat(itemsToFind));
  }

createArrayFunction
  = "createArray" "(" arg1:anyParam restArgs:("," arg:anyParam { return arg; })* ")" {
    return functionNode(nodeKind.CreateArrayFunction, location(), [arg1].concat(restArgs));
  }

emptyFunction
  = "empty" "(" itemToTest:(arrParam/objParam/strParam) ")" {
    return functionNode(nodeKind.EmptyFunction, location(), [itemsToFind]);
  }

firstFunction
  = "first" "(" arg1:(arrParam) ")" {
    return functionNode(nodeKind.FirstFunction, location(), [arg1]);
  }

intersectionFunction
  = "intersection" "(" arg1:(arrParam/objParam) "," arg2:(arrParam/objParam) restArgs: ( "," arg:(arrParam/objParam) { return arg; })* ")" {
    return functionNode(nodeKind.IntersectionFunction, location(), [arg1, arg2].concat(restArgs));
  }

jsonFunction
  = "json" "(" arg1:strParam ")" {
    return functionNode(nodeKind.JsonFunction, location(), [arg1]);
  }

lastFunction
  = "last" "(" arg1:(arrParam/strParam) ")" {
    return functionNode(nodeKind.LastFunction, location(), [arg1]);
  }

lengthFunction
  = "length" "(" arg1:(arrParam/strParam) ")" {
    return functionNode(nodeKind.LengthFunction, location(), [arg1]);
  }

maxFunction
  = "max" "(" arg1:arrParam ")" {
    return functionNode(nodeKind.MaxFunction, location(), [arg1]);
  }
  / "max" "(" arg1:intParam restArgs:("," arg:intParam { return arg; })* ")" {
    return functionNode(nodeKind.MaxFunction, location(), [arg1].concat(restArgs));
  }

minFunction
  = "min" "(" arg1:arrParam ")" {
    return functionNode(nodeKind.MinFunction, location(), [arg1]);
  }
  / "min" "(" arg1:intParam restArgs:("," arg:intParam { return arg; })* ")" {
    return functionNode(nodeKind.MinFunction, location(), [arg1].concat(restArgs));
  }

rangeFunction
  = "range" "(" startingInteger:intParam "," numOfElement:intParam ")" {
    return functionNode(nodeKind.RangeFunction, location(), [startingInteger].concat(numOfElement));
  }

skipFunction
  = "skip" "(" originalValue:(arrParam/strParam) "," numToSkip:intParam ")" {
    return functionNode(nodeKind.SkipFunction, location(), [originalValue].concat(numToSkip));
  }

takeFunction
  = "take" "(" originalValue:(arrParam/strParam) "," numToTake:intParam ")" {
    return functionNode(nodeKind.TakeFunction, location(), [originalValue].concat(numToTake));
  }

unionFunction
  = "union" "(" arg1:(arrParam/objParam) "," arg2:(arrParam/objParam) restArgs:("," arg:(arrParam/objParam) { return arg; }) ")" {
    return functionNode(nodeKind.UnionFunction, location(), [arg1, arg2].concat(restArgs));
  }

/*
 * Parameters
 */

intParam
  = _ num:integer _ { return num; }
  / _ func:(
    coalesceFunction
    / firstFunction
    / lastFunction
    / lengthFunction
    / maxFunction
    / minFunction
  ) _ { return func; }

strParam
  = _ str:string _ { return str; }
  / _ func:(
    coalesceFunction
    / concatFunction
    / firstFunction
    / lastFunction
    / skipFunction
    / takeFunction
  ) _ { return func; }


charParam
  = _ "'" ch:character "'" _ {
    return literalNode(nodeKind.String, location(), ch);
  }

arrParam
  = _ func:(
    arrayFunction
    / coalesceFunction
    / concatFunction
    / createArrayFunction
    / intersectionFunction
    / rangeFunction
    / skipFunction
    / takeFunction
    / unionFunction
  ) _ { return func; }

objParam
  = _ str:string _ { return str; }
  / _ func:(
    coalesceFunction
    / firstFunction
    / intersectionFunction
    / jsonFunction
    / lastFunction
    / unionFunction
  ) _ { return func; }


anyParam
  = param:(intParam/strParam/arrParam/objParam) { return param; }

/*
 * Literals
 */
integer
  = ("+" / "-")? ([1-9] digit+ / digit) {
    return literalNode(nodeKind.Integer, location(), parseInt(text()));
  }

string
  = "'" chars:character* "'" {
    return literalNode(nodeKind.String, location(), chars.join(""));
  }


/*
 * Other Lexical Elements
 * =====================================================================
*/

character
  = [^'\\\0-\x1F\x7f]
  / "\\'"  { return "'";  }
  / "\\\\" { return "\\"; }
  / "\\/"  { return "/";  }
  / "\\b"  { return "\b"; }
  / "\\f"  { return "\f"; }
  / "\\n"  { return "\n"; }
  / "\\r"  { return "\r"; }
  / "\\t"  { return "\t"; }
  / "\\u" digits:$(hexDigit hexDigit hexDigit hexDigit) {
    return String.fromCharCode(parseInt(digits, 16));
}

digit
  = [0-9]

hexDigit
= [0-9a-f]i

_ "whitespaces"
  = ws*

ws "whitespace"
= [ \t\r\n]
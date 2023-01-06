interface Location {
  start: {
    line: number;
    column: number;
  };
  end: {
    line: number;
    column: number;
  };
}

export interface BaseASTNode {
  type: ASTNodeTypeString;
  range?: [number, number];
  loc?: Location;
}

export interface File extends BaseASTNode {
  type: "File";
  children: ASTNode[];
}

export const astNodeTypes = [
  "File",
  "Module",
  "UseDecl",
  "UseMember",
  "UseAlias",
  "Script",
  "FriendDecl",
  "ModuleMemberModifiers",
  "ModuleMemberModifier",
  "Visibility",
  "AttributeValue",
  "Attribute",
  "CommaAttribute",
  "Attributes",
  "Type",
  "Types",
  "Ability",
  "OptionalTypeArgs",
  "TypeParameter",
  "TypeParameters",
  "Constraint",
  "TypeParameterWithPhantomDecl",
  "TypeParameterWithPhantomDecls",
  "OptionalTypeParameters",
  "StructTypeParameter",
  "FunctionDecl",
  "FunctionDefName",
  "Parameters",
  "Parameter",
  "Sequence",
  "SequenceItem",
  "LetBinding",
  "Term",
  "Exp",
  "BinOp",
  "BinOpExp",
  "UnaryExp",
  "DotOrIndexChain",
  "Quantifier",
  "QuantifierBindings",
  "QuantifierBind",
  "Exps",
  "ExpField",
  "BindField",
  "BindFields",
  "Bind",
  "Binds",
  "BindList",
  "LambdaBindList",
  "Alphanumeric",
  "Digit",
  "Number",
  "NumberTyped",
  "ByteString",
  "Value",
  "ConstantDecl",
  "StructDecl",
  "StructDefName",
  "FieldAnnots",
  "FieldAnnot",
  "DocComments",
  "Identifier",
  "NumericalAddress",
  "LeadingNameAccess",
  "Var",
  "Field",
  "ModuleIdent",
  "ModuleName",
  "NameAccessChain",
  "AddressBlock",
] as const;

export type ASTNodeTypeString = typeof astNodeTypes[number];

export interface File extends BaseASTNode {
  type: "File";
  children: ASTNode[];
}

export type ASTNode = Module;

export interface Module extends BaseASTNode {
  type: "Module";
  name: string;
  attributes: Attributes;
  kind: string; // spec or module
  subNodes: BaseASTNode[];
}

export interface UseDecl extends BaseASTNode {
  type: "UseDecl";
  moduleIdent: ModuleIdent;
  alias: string | null;
  aliasIdentifier: Identifier | null;
  aliases: Array<[string, string | null]> | null;
  aliasesIdentifiers: Array<[Identifier, Identifier | null]> | null;
}

export interface FriendDecl extends BaseASTNode {
  type: "FriendDecl";
  nameAccessChain: NameAccessChain;
}

export interface ModuleMemberModifiers extends BaseASTNode {
  type: "ModuleMemberModifiers";
  moduleMemberModifiers: null | ModuleMemberModifier[];
}

export interface ModuleMemberModifier extends BaseASTNode {
  type: "ModuleMemberModifier";
  visibility: null | Visibility;
  isNative: boolean;
}

export interface Visibility extends BaseASTNode {
  type: "Visibility";
  name: string;
}

export interface ConstantDecl extends BaseASTNode {
  type: "ConstantDecl";
  name: string;
  typeName: Type;
  expression: Exp;
}

export interface StructDecl extends BaseASTNode {
  type: "StructDecl";
  name: string;
  hasAbility: boolean;
  abilities: null | Ability[];
  fieldAnnots: null | FieldAnnot[];
}

export interface FunctionDecl extends BaseASTNode {
  type: "FunctionDecl";
  name: string;
  parameters: null | Parameter[];
  returnType: null | Type;
  acquires: null | NameAccessChain[];
  sequence: Sequence;
}

export interface Sequence extends BaseASTNode {
  type: "Sequence";
  useDecls: null | UseDecl[];
  sequenceItem: null | SequenceItem[];
  returnValue: null | Exp;
}

export interface SequenceItem extends BaseASTNode {
  type: "SequenceItem";
  exp: null | Exp;
  letBinding: null | BaseASTNode;
}

export interface LetBinding extends BaseASTNode {
  type: "LetBinding";
  bind: null | Bind;
  binds: null | Bind[];
  bindExp: null | Exp;
  bindType: null | Type;
}

export interface Bind extends BaseASTNode {
  type: "Bind";
  var: null | string;
  nameAccessChain: null | NameAccessChain;
  optionalTypeArgs: null | Type[];
  bindFields: null | BindField[];
}

export interface BindField extends BaseASTNode {
  type: "BindField";
  field: Identifier;
  bind: null | Bind;
}

export interface Parameter extends BaseASTNode {
  type: "Parameter";
  parameterName: string;
  parameterType: Type;
}

export interface FieldAnnot {
  type: "FieldAnnot";
  field: string;
  value: string;
}

export const AbilityValues = ["copy", "drop", "store", "key"];
export type AbilityValue = typeof AbilityValues[number];
export interface Ability extends BaseASTNode {
  type: "Ability";
  name: AbilityValue;
}

export interface Type extends BaseASTNode {
  type: "Type";
  name: string;
}

export interface Exp extends BaseASTNode {
  type: "Exp";
}

export const BinOpValues = [
  "==>", // spec only
  "||",
  "&&",
  "==",
  "!=",
  "<",
  ">",
  "<=",
  ">=",
  "..", // spec only
  "|",
  "^",
  "&",
  "<<",
  ">>",
  "+",
  "-",
  "*",
  "/",
  "%",
] as const;
export type BinOp = typeof BinOpValues[number];
export interface BinOpExp extends BaseASTNode {
  type: "BinOpExp";
  left: UnaryExp;
  binOps: null | BinOp[];
  unaryOps: null | UnaryOp[];
  operator: BinOp;
}

export const UnaryOpValues = ["!", "&mut", , "&", "*", "move", "copy"];
export type UnaryOp = typeof UnaryOpValues[number];
export interface UnaryExp extends BaseASTNode {
  type: "UnaryExp";
  operator: null | UnaryOp;
  subExp: null | Exp;
  subVar: null | Var;
  dotOrIndexChain: null | DotOrIndexChain;
  isPrefix: boolean;
}

export interface DotOrIndexChain extends BaseASTNode {
  type: "DotOrIndexChain";
}

export interface NameAccessChain extends BaseASTNode {
  type: "NameAccessChain";
  name: string;
}

export interface Var extends BaseASTNode {
  type: "Var";
  name: string;
}

export interface Identifier extends BaseASTNode {
  type: "Identifier";
  name: string;
}

export interface ModuleIdent extends BaseASTNode {
  type: "ModuleIdent";
}

export interface Attributes extends BaseASTNode {
  type: "Attributes";
}

type ASTMap<U> = {
  [K in ASTNodeTypeString]: U extends { type: K } ? U : never;
};
type ASTTypeMap = ASTMap<ASTNode>;

type ASTVisitorEnter = {
  [K in keyof ASTTypeMap]?: (ast: ASTTypeMap[K], parent?: ASTNode) => any;
};
type ASTVisitorExit = {
  [K in keyof ASTTypeMap as `${K}:exit`]?: (
    ast: ASTTypeMap[K],
    parent?: ASTNode
  ) => any;
};

export type ASTVisitor = ASTVisitorEnter & ASTVisitorExit;

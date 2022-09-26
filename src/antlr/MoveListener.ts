// Generated from Move.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./MoveParser";
import { ModuleContext } from "./MoveParser";
import { UseDeclContext } from "./MoveParser";
import { UseMemberContext } from "./MoveParser";
import { UseAliasContext } from "./MoveParser";
import { ScriptContext } from "./MoveParser";
import { FriendDeclContext } from "./MoveParser";
import { ModuleMemberModifiersContext } from "./MoveParser";
import { ModuleMemberModifierContext } from "./MoveParser";
import { VisibilityContext } from "./MoveParser";
import { AttributeValueContext } from "./MoveParser";
import { AttributeContext } from "./MoveParser";
import { CommaAttributeContext } from "./MoveParser";
import { AttributesContext } from "./MoveParser";
import { TypeContext } from "./MoveParser";
import { TypesContext } from "./MoveParser";
import { AbilityContext } from "./MoveParser";
import { OptionalTypeArgsContext } from "./MoveParser";
import { TypeParameterContext } from "./MoveParser";
import { TypeParametersContext } from "./MoveParser";
import { ConstraintContext } from "./MoveParser";
import { TypeParameterWithPhantomDeclContext } from "./MoveParser";
import { TypeParameterWithPhantomDeclsContext } from "./MoveParser";
import { OptionalTypeParametersContext } from "./MoveParser";
import { StructTypeParameterContext } from "./MoveParser";
import { FunctionDeclContext } from "./MoveParser";
import { FunctionDefNameContext } from "./MoveParser";
import { ParametersContext } from "./MoveParser";
import { ParameterContext } from "./MoveParser";
import { SequenceContext } from "./MoveParser";
import { SequenceItemContext } from "./MoveParser";
import { TermContext } from "./MoveParser";
import { ExpContext } from "./MoveParser";
import { BinOpContext } from "./MoveParser";
import { BinOpExpContext } from "./MoveParser";
import { UnaryExpContext } from "./MoveParser";
import { DotOrIndexChainContext } from "./MoveParser";
import { QuantifierContext } from "./MoveParser";
import { QuantifierBindingsContext } from "./MoveParser";
import { QuantifierBindContext } from "./MoveParser";
import { ExpsContext } from "./MoveParser";
import { ExpFieldContext } from "./MoveParser";
import { BindFieldContext } from "./MoveParser";
import { BindFieldsContext } from "./MoveParser";
import { BindContext } from "./MoveParser";
import { BindsContext } from "./MoveParser";
import { BindListContext } from "./MoveParser";
import { LambdaBindListContext } from "./MoveParser";
import { NumberContext } from "./MoveParser";
import { NumberTypedContext } from "./MoveParser";
import { ByteStringContext } from "./MoveParser";
import { ValueContext } from "./MoveParser";
import { ConstantDeclContext } from "./MoveParser";
import { StructDeclContext } from "./MoveParser";
import { StructDefNameContext } from "./MoveParser";
import { FieldAnnotsContext } from "./MoveParser";
import { FieldAnnotContext } from "./MoveParser";
import { DocCommentsContext } from "./MoveParser";
import { LeadingNameAccessContext } from "./MoveParser";
import { VarContext } from "./MoveParser";
import { FieldContext } from "./MoveParser";
import { ModuleIdentContext } from "./MoveParser";
import { ModuleNameContext } from "./MoveParser";
import { NameAccessChainContext } from "./MoveParser";
import { AddressBlockContext } from "./MoveParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MoveParser`.
 */
export interface MoveListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MoveParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.useDecl`.
	 * @param ctx the parse tree
	 */
	enterUseDecl?: (ctx: UseDeclContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.useDecl`.
	 * @param ctx the parse tree
	 */
	exitUseDecl?: (ctx: UseDeclContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.useMember`.
	 * @param ctx the parse tree
	 */
	enterUseMember?: (ctx: UseMemberContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.useMember`.
	 * @param ctx the parse tree
	 */
	exitUseMember?: (ctx: UseMemberContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.useAlias`.
	 * @param ctx the parse tree
	 */
	enterUseAlias?: (ctx: UseAliasContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.useAlias`.
	 * @param ctx the parse tree
	 */
	exitUseAlias?: (ctx: UseAliasContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.script`.
	 * @param ctx the parse tree
	 */
	enterScript?: (ctx: ScriptContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.script`.
	 * @param ctx the parse tree
	 */
	exitScript?: (ctx: ScriptContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.friendDecl`.
	 * @param ctx the parse tree
	 */
	enterFriendDecl?: (ctx: FriendDeclContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.friendDecl`.
	 * @param ctx the parse tree
	 */
	exitFriendDecl?: (ctx: FriendDeclContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.moduleMemberModifiers`.
	 * @param ctx the parse tree
	 */
	enterModuleMemberModifiers?: (ctx: ModuleMemberModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.moduleMemberModifiers`.
	 * @param ctx the parse tree
	 */
	exitModuleMemberModifiers?: (ctx: ModuleMemberModifiersContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.moduleMemberModifier`.
	 * @param ctx the parse tree
	 */
	enterModuleMemberModifier?: (ctx: ModuleMemberModifierContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.moduleMemberModifier`.
	 * @param ctx the parse tree
	 */
	exitModuleMemberModifier?: (ctx: ModuleMemberModifierContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.visibility`.
	 * @param ctx the parse tree
	 */
	enterVisibility?: (ctx: VisibilityContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.visibility`.
	 * @param ctx the parse tree
	 */
	exitVisibility?: (ctx: VisibilityContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.attributeValue`.
	 * @param ctx the parse tree
	 */
	enterAttributeValue?: (ctx: AttributeValueContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.attributeValue`.
	 * @param ctx the parse tree
	 */
	exitAttributeValue?: (ctx: AttributeValueContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.commaAttribute`.
	 * @param ctx the parse tree
	 */
	enterCommaAttribute?: (ctx: CommaAttributeContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.commaAttribute`.
	 * @param ctx the parse tree
	 */
	exitCommaAttribute?: (ctx: CommaAttributeContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.attributes`.
	 * @param ctx the parse tree
	 */
	enterAttributes?: (ctx: AttributesContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.attributes`.
	 * @param ctx the parse tree
	 */
	exitAttributes?: (ctx: AttributesContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.types`.
	 * @param ctx the parse tree
	 */
	enterTypes?: (ctx: TypesContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.types`.
	 * @param ctx the parse tree
	 */
	exitTypes?: (ctx: TypesContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.ability`.
	 * @param ctx the parse tree
	 */
	enterAbility?: (ctx: AbilityContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.ability`.
	 * @param ctx the parse tree
	 */
	exitAbility?: (ctx: AbilityContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.optionalTypeArgs`.
	 * @param ctx the parse tree
	 */
	enterOptionalTypeArgs?: (ctx: OptionalTypeArgsContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.optionalTypeArgs`.
	 * @param ctx the parse tree
	 */
	exitOptionalTypeArgs?: (ctx: OptionalTypeArgsContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeParameters?: (ctx: TypeParametersContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.constraint`.
	 * @param ctx the parse tree
	 */
	enterConstraint?: (ctx: ConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.constraint`.
	 * @param ctx the parse tree
	 */
	exitConstraint?: (ctx: ConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.typeParameterWithPhantomDecl`.
	 * @param ctx the parse tree
	 */
	enterTypeParameterWithPhantomDecl?: (ctx: TypeParameterWithPhantomDeclContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.typeParameterWithPhantomDecl`.
	 * @param ctx the parse tree
	 */
	exitTypeParameterWithPhantomDecl?: (ctx: TypeParameterWithPhantomDeclContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.typeParameterWithPhantomDecls`.
	 * @param ctx the parse tree
	 */
	enterTypeParameterWithPhantomDecls?: (ctx: TypeParameterWithPhantomDeclsContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.typeParameterWithPhantomDecls`.
	 * @param ctx the parse tree
	 */
	exitTypeParameterWithPhantomDecls?: (ctx: TypeParameterWithPhantomDeclsContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.optionalTypeParameters`.
	 * @param ctx the parse tree
	 */
	enterOptionalTypeParameters?: (ctx: OptionalTypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.optionalTypeParameters`.
	 * @param ctx the parse tree
	 */
	exitOptionalTypeParameters?: (ctx: OptionalTypeParametersContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.structTypeParameter`.
	 * @param ctx the parse tree
	 */
	enterStructTypeParameter?: (ctx: StructTypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.structTypeParameter`.
	 * @param ctx the parse tree
	 */
	exitStructTypeParameter?: (ctx: StructTypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	enterFunctionDecl?: (ctx: FunctionDeclContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	exitFunctionDecl?: (ctx: FunctionDeclContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.functionDefName`.
	 * @param ctx the parse tree
	 */
	enterFunctionDefName?: (ctx: FunctionDefNameContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.functionDefName`.
	 * @param ctx the parse tree
	 */
	exitFunctionDefName?: (ctx: FunctionDefNameContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.sequence`.
	 * @param ctx the parse tree
	 */
	enterSequence?: (ctx: SequenceContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.sequence`.
	 * @param ctx the parse tree
	 */
	exitSequence?: (ctx: SequenceContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.sequenceItem`.
	 * @param ctx the parse tree
	 */
	enterSequenceItem?: (ctx: SequenceItemContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.sequenceItem`.
	 * @param ctx the parse tree
	 */
	exitSequenceItem?: (ctx: SequenceItemContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.binOp`.
	 * @param ctx the parse tree
	 */
	enterBinOp?: (ctx: BinOpContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.binOp`.
	 * @param ctx the parse tree
	 */
	exitBinOp?: (ctx: BinOpContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.binOpExp`.
	 * @param ctx the parse tree
	 */
	enterBinOpExp?: (ctx: BinOpExpContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.binOpExp`.
	 * @param ctx the parse tree
	 */
	exitBinOpExp?: (ctx: BinOpExpContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.unaryExp`.
	 * @param ctx the parse tree
	 */
	enterUnaryExp?: (ctx: UnaryExpContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.unaryExp`.
	 * @param ctx the parse tree
	 */
	exitUnaryExp?: (ctx: UnaryExpContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.dotOrIndexChain`.
	 * @param ctx the parse tree
	 */
	enterDotOrIndexChain?: (ctx: DotOrIndexChainContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.dotOrIndexChain`.
	 * @param ctx the parse tree
	 */
	exitDotOrIndexChain?: (ctx: DotOrIndexChainContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.quantifier`.
	 * @param ctx the parse tree
	 */
	enterQuantifier?: (ctx: QuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.quantifier`.
	 * @param ctx the parse tree
	 */
	exitQuantifier?: (ctx: QuantifierContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.quantifierBindings`.
	 * @param ctx the parse tree
	 */
	enterQuantifierBindings?: (ctx: QuantifierBindingsContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.quantifierBindings`.
	 * @param ctx the parse tree
	 */
	exitQuantifierBindings?: (ctx: QuantifierBindingsContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.quantifierBind`.
	 * @param ctx the parse tree
	 */
	enterQuantifierBind?: (ctx: QuantifierBindContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.quantifierBind`.
	 * @param ctx the parse tree
	 */
	exitQuantifierBind?: (ctx: QuantifierBindContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.exps`.
	 * @param ctx the parse tree
	 */
	enterExps?: (ctx: ExpsContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.exps`.
	 * @param ctx the parse tree
	 */
	exitExps?: (ctx: ExpsContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.expField`.
	 * @param ctx the parse tree
	 */
	enterExpField?: (ctx: ExpFieldContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.expField`.
	 * @param ctx the parse tree
	 */
	exitExpField?: (ctx: ExpFieldContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.bindField`.
	 * @param ctx the parse tree
	 */
	enterBindField?: (ctx: BindFieldContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.bindField`.
	 * @param ctx the parse tree
	 */
	exitBindField?: (ctx: BindFieldContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.bindFields`.
	 * @param ctx the parse tree
	 */
	enterBindFields?: (ctx: BindFieldsContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.bindFields`.
	 * @param ctx the parse tree
	 */
	exitBindFields?: (ctx: BindFieldsContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.bind`.
	 * @param ctx the parse tree
	 */
	enterBind?: (ctx: BindContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.bind`.
	 * @param ctx the parse tree
	 */
	exitBind?: (ctx: BindContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.binds`.
	 * @param ctx the parse tree
	 */
	enterBinds?: (ctx: BindsContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.binds`.
	 * @param ctx the parse tree
	 */
	exitBinds?: (ctx: BindsContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.bindList`.
	 * @param ctx the parse tree
	 */
	enterBindList?: (ctx: BindListContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.bindList`.
	 * @param ctx the parse tree
	 */
	exitBindList?: (ctx: BindListContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.lambdaBindList`.
	 * @param ctx the parse tree
	 */
	enterLambdaBindList?: (ctx: LambdaBindListContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.lambdaBindList`.
	 * @param ctx the parse tree
	 */
	exitLambdaBindList?: (ctx: LambdaBindListContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.numberTyped`.
	 * @param ctx the parse tree
	 */
	enterNumberTyped?: (ctx: NumberTypedContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.numberTyped`.
	 * @param ctx the parse tree
	 */
	exitNumberTyped?: (ctx: NumberTypedContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.byteString`.
	 * @param ctx the parse tree
	 */
	enterByteString?: (ctx: ByteStringContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.byteString`.
	 * @param ctx the parse tree
	 */
	exitByteString?: (ctx: ByteStringContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.constantDecl`.
	 * @param ctx the parse tree
	 */
	enterConstantDecl?: (ctx: ConstantDeclContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.constantDecl`.
	 * @param ctx the parse tree
	 */
	exitConstantDecl?: (ctx: ConstantDeclContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.structDecl`.
	 * @param ctx the parse tree
	 */
	enterStructDecl?: (ctx: StructDeclContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.structDecl`.
	 * @param ctx the parse tree
	 */
	exitStructDecl?: (ctx: StructDeclContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.structDefName`.
	 * @param ctx the parse tree
	 */
	enterStructDefName?: (ctx: StructDefNameContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.structDefName`.
	 * @param ctx the parse tree
	 */
	exitStructDefName?: (ctx: StructDefNameContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.fieldAnnots`.
	 * @param ctx the parse tree
	 */
	enterFieldAnnots?: (ctx: FieldAnnotsContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.fieldAnnots`.
	 * @param ctx the parse tree
	 */
	exitFieldAnnots?: (ctx: FieldAnnotsContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.fieldAnnot`.
	 * @param ctx the parse tree
	 */
	enterFieldAnnot?: (ctx: FieldAnnotContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.fieldAnnot`.
	 * @param ctx the parse tree
	 */
	exitFieldAnnot?: (ctx: FieldAnnotContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.docComments`.
	 * @param ctx the parse tree
	 */
	enterDocComments?: (ctx: DocCommentsContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.docComments`.
	 * @param ctx the parse tree
	 */
	exitDocComments?: (ctx: DocCommentsContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.leadingNameAccess`.
	 * @param ctx the parse tree
	 */
	enterLeadingNameAccess?: (ctx: LeadingNameAccessContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.leadingNameAccess`.
	 * @param ctx the parse tree
	 */
	exitLeadingNameAccess?: (ctx: LeadingNameAccessContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.moduleIdent`.
	 * @param ctx the parse tree
	 */
	enterModuleIdent?: (ctx: ModuleIdentContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.moduleIdent`.
	 * @param ctx the parse tree
	 */
	exitModuleIdent?: (ctx: ModuleIdentContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.moduleName`.
	 * @param ctx the parse tree
	 */
	enterModuleName?: (ctx: ModuleNameContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.moduleName`.
	 * @param ctx the parse tree
	 */
	exitModuleName?: (ctx: ModuleNameContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.nameAccessChain`.
	 * @param ctx the parse tree
	 */
	enterNameAccessChain?: (ctx: NameAccessChainContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.nameAccessChain`.
	 * @param ctx the parse tree
	 */
	exitNameAccessChain?: (ctx: NameAccessChainContext) => void;

	/**
	 * Enter a parse tree produced by `MoveParser.addressBlock`.
	 * @param ctx the parse tree
	 */
	enterAddressBlock?: (ctx: AddressBlockContext) => void;
	/**
	 * Exit a parse tree produced by `MoveParser.addressBlock`.
	 * @param ctx the parse tree
	 */
	exitAddressBlock?: (ctx: AddressBlockContext) => void;
}


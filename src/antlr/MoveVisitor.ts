// Generated from Move.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MoveParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MoveVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `MoveParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule?: (ctx: ModuleContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.useDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseDecl?: (ctx: UseDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.useMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseMember?: (ctx: UseMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.useAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseAlias?: (ctx: UseAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.script`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScript?: (ctx: ScriptContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.friendDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFriendDecl?: (ctx: FriendDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.moduleMemberModifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleMemberModifiers?: (ctx: ModuleMemberModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.moduleMemberModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleMemberModifier?: (ctx: ModuleMemberModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.visibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVisibility?: (ctx: VisibilityContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.attributeValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeValue?: (ctx: AttributeValueContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.commaAttribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommaAttribute?: (ctx: CommaAttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.attributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributes?: (ctx: AttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.types`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypes?: (ctx: TypesContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.ability`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbility?: (ctx: AbilityContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.optionalTypeArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalTypeArgs?: (ctx: OptionalTypeArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.constraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraint?: (ctx: ConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.typeParameterWithPhantomDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameterWithPhantomDecl?: (ctx: TypeParameterWithPhantomDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.typeParameterWithPhantomDecls`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameterWithPhantomDecls?: (ctx: TypeParameterWithPhantomDeclsContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.optionalTypeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalTypeParameters?: (ctx: OptionalTypeParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.structTypeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructTypeParameter?: (ctx: StructTypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.functionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.functionDefName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefName?: (ctx: FunctionDefNameContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.sequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequence?: (ctx: SequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.sequenceItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequenceItem?: (ctx: SequenceItemContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?: (ctx: ExpContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.binOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinOp?: (ctx: BinOpContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.binOpExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinOpExp?: (ctx: BinOpExpContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.unaryExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExp?: (ctx: UnaryExpContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.dotOrIndexChain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotOrIndexChain?: (ctx: DotOrIndexChainContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.quantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifier?: (ctx: QuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.quantifierBindings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifierBindings?: (ctx: QuantifierBindingsContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.quantifierBind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifierBind?: (ctx: QuantifierBindContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.exps`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExps?: (ctx: ExpsContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.expField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpField?: (ctx: ExpFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.bindField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBindField?: (ctx: BindFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.bindFields`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBindFields?: (ctx: BindFieldsContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.bind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBind?: (ctx: BindContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.binds`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinds?: (ctx: BindsContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.bindList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBindList?: (ctx: BindListContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.lambdaBindList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaBindList?: (ctx: LambdaBindListContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.numberTyped`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberTyped?: (ctx: NumberTypedContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.byteString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitByteString?: (ctx: ByteStringContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.constantDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDecl?: (ctx: ConstantDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.structDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDecl?: (ctx: StructDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.structDefName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDefName?: (ctx: StructDefNameContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.fieldAnnots`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldAnnots?: (ctx: FieldAnnotsContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.fieldAnnot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldAnnot?: (ctx: FieldAnnotContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.docComments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocComments?: (ctx: DocCommentsContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.leadingNameAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeadingNameAccess?: (ctx: LeadingNameAccessContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.moduleIdent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleIdent?: (ctx: ModuleIdentContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.moduleName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleName?: (ctx: ModuleNameContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.nameAccessChain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameAccessChain?: (ctx: NameAccessChainContext) => Result;

	/**
	 * Visit a parse tree produced by `MoveParser.addressBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddressBlock?: (ctx: AddressBlockContext) => Result;
}


// Generated from Move.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MoveListener } from "./MoveListener";
import { MoveVisitor } from "./MoveVisitor";


export class MoveParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly Alphanumeric = 85;
	public static readonly Digit = 86;
	public static readonly Identifier = 87;
	public static readonly NumericalAddress = 88;
	public static readonly RULE_file = 0;
	public static readonly RULE_module = 1;
	public static readonly RULE_useDecl = 2;
	public static readonly RULE_useMember = 3;
	public static readonly RULE_useAlias = 4;
	public static readonly RULE_script = 5;
	public static readonly RULE_friendDecl = 6;
	public static readonly RULE_moduleMemberModifiers = 7;
	public static readonly RULE_moduleMemberModifier = 8;
	public static readonly RULE_visibility = 9;
	public static readonly RULE_attributeValue = 10;
	public static readonly RULE_attribute = 11;
	public static readonly RULE_commaAttribute = 12;
	public static readonly RULE_attributes = 13;
	public static readonly RULE_type = 14;
	public static readonly RULE_types = 15;
	public static readonly RULE_ability = 16;
	public static readonly RULE_optionalTypeArgs = 17;
	public static readonly RULE_typeParameter = 18;
	public static readonly RULE_typeParameters = 19;
	public static readonly RULE_constraint = 20;
	public static readonly RULE_typeParameterWithPhantomDecl = 21;
	public static readonly RULE_typeParameterWithPhantomDecls = 22;
	public static readonly RULE_optionalTypeParameters = 23;
	public static readonly RULE_structTypeParameter = 24;
	public static readonly RULE_functionDecl = 25;
	public static readonly RULE_functionDefName = 26;
	public static readonly RULE_parameters = 27;
	public static readonly RULE_parameter = 28;
	public static readonly RULE_sequence = 29;
	public static readonly RULE_sequenceItem = 30;
	public static readonly RULE_term = 31;
	public static readonly RULE_exp = 32;
	public static readonly RULE_binOp = 33;
	public static readonly RULE_binOpExp = 34;
	public static readonly RULE_unaryExp = 35;
	public static readonly RULE_dotOrIndexChain = 36;
	public static readonly RULE_quantifier = 37;
	public static readonly RULE_quantifierBindings = 38;
	public static readonly RULE_quantifierBind = 39;
	public static readonly RULE_exps = 40;
	public static readonly RULE_expField = 41;
	public static readonly RULE_bindField = 42;
	public static readonly RULE_bindFields = 43;
	public static readonly RULE_bind = 44;
	public static readonly RULE_binds = 45;
	public static readonly RULE_bindList = 46;
	public static readonly RULE_lambdaBindList = 47;
	public static readonly RULE_number = 48;
	public static readonly RULE_numberTyped = 49;
	public static readonly RULE_byteString = 50;
	public static readonly RULE_value = 51;
	public static readonly RULE_constantDecl = 52;
	public static readonly RULE_structDecl = 53;
	public static readonly RULE_structDefName = 54;
	public static readonly RULE_fieldAnnots = 55;
	public static readonly RULE_fieldAnnot = 56;
	public static readonly RULE_docComments = 57;
	public static readonly RULE_leadingNameAccess = 58;
	public static readonly RULE_var = 59;
	public static readonly RULE_field = 60;
	public static readonly RULE_moduleIdent = 61;
	public static readonly RULE_moduleName = 62;
	public static readonly RULE_nameAccessChain = 63;
	public static readonly RULE_addressBlock = 64;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "module", "useDecl", "useMember", "useAlias", "script", "friendDecl", 
		"moduleMemberModifiers", "moduleMemberModifier", "visibility", "attributeValue", 
		"attribute", "commaAttribute", "attributes", "type", "types", "ability", 
		"optionalTypeArgs", "typeParameter", "typeParameters", "constraint", "typeParameterWithPhantomDecl", 
		"typeParameterWithPhantomDecls", "optionalTypeParameters", "structTypeParameter", 
		"functionDecl", "functionDefName", "parameters", "parameter", "sequence", 
		"sequenceItem", "term", "exp", "binOp", "binOpExp", "unaryExp", "dotOrIndexChain", 
		"quantifier", "quantifierBindings", "quantifierBind", "exps", "expField", 
		"bindField", "bindFields", "bind", "binds", "bindList", "lambdaBindList", 
		"number", "numberTyped", "byteString", "value", "constantDecl", "structDecl", 
		"structDefName", "fieldAnnots", "fieldAnnot", "docComments", "leadingNameAccess", 
		"var", "field", "moduleIdent", "moduleName", "nameAccessChain", "addressBlock",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'spec'", "'module'", "'::'", "'{'", "'}'", "'use'", "';'", 
		"','", "'as'", "'script'", "'friend'", "'native'", "'public'", "'('", 
		"')'", "'='", "'#'", "'['", "']'", "'<'", "'>'", "'&'", "'&mut'", "'|'", 
		"'copy'", "'drop'", "'store'", "'key'", "':'", "'+'", "'phantom'", "'fun'", 
		"'acquires'", "'let'", "'break'", "'continue'", "'vector'", "'if'", "'else'", 
		"'while'", "'loop'", "'return'", "'abort'", "'==>'", "'||'", "'&&'", "'=='", 
		"'!='", "'<='", "'>='", "'..'", "'^'", "'<<'", "'>>'", "'-'", "'*'", "'/'", 
		"'%'", "'!'", "'move'", "'.'", "'forall'", "'exists'", "'where'", "'choose'", 
		"'min'", "'in'", "'u8'", "'u64'", "'u128'", "'b\"'", "'x\"'", "'\"'", 
		"'@'", "'true'", "'false'", "'const'", "'struct'", "'has'", "'/\"'", "'\"/'", 
		"'//'", "'///'", "'address'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "Alphanumeric", "Digit", "Identifier", "NumericalAddress",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MoveParser._LITERAL_NAMES, MoveParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MoveParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Move.g4"; }

	// @Override
	public get ruleNames(): string[] { return MoveParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MoveParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MoveParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MoveParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MoveParser.T__9 || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (MoveParser.T__79 - 80)) | (1 << (MoveParser.T__81 - 80)) | (1 << (MoveParser.T__82 - 80)) | (1 << (MoveParser.T__83 - 80)))) !== 0)) {
				{
				this.state = 133;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MoveParser.T__83:
					{
					this.state = 130;
					this.addressBlock();
					}
					break;
				case MoveParser.T__79:
				case MoveParser.T__81:
				case MoveParser.T__82:
					{
					this.state = 131;
					this.module();
					}
					break;
				case MoveParser.T__9:
					{
					this.state = 132;
					this.script();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public module(): ModuleContext {
		let _localctx: ModuleContext = new ModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MoveParser.RULE_module);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.docComments();
			this.state = 139;
			_la = this._input.LA(1);
			if (!(_la === MoveParser.T__0 || _la === MoveParser.T__1)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 143;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 140;
				this.leadingNameAccess();
				this.state = 141;
				this.match(MoveParser.T__2);
				}
				break;
			}
			this.state = 145;
			this.moduleName();
			this.state = 146;
			this.match(MoveParser.T__3);
			this.state = 147;
			this.attributes();
			this.state = 160;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 148;
				this.useDecl();
				}
				break;

			case 2:
				{
				this.state = 149;
				this.friendDecl();
				}
				break;

			case 3:
				// tslint:disable-next-line:no-empty
				{
				}
				break;

			case 4:
				{
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (MoveParser.T__79 - 80)) | (1 << (MoveParser.T__81 - 80)) | (1 << (MoveParser.T__82 - 80)))) !== 0)) {
					{
					this.state = 151;
					this.docComments();
					this.state = 152;
					this.moduleMemberModifiers();
					this.state = 156;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MoveParser.T__76:
						{
						this.state = 153;
						this.constantDecl();
						}
						break;
					case MoveParser.T__77:
						{
						this.state = 154;
						this.structDecl();
						}
						break;
					case MoveParser.T__31:
						{
						this.state = 155;
						this.functionDecl();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}

				}
				break;
			}
			this.state = 162;
			this.match(MoveParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public useDecl(): UseDeclContext {
		let _localctx: UseDeclContext = new UseDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MoveParser.RULE_useDecl);
		let _la: number;
		try {
			this.state = 189;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 164;
				this.match(MoveParser.T__5);
				this.state = 165;
				this.moduleIdent();
				this.state = 166;
				this.useAlias();
				this.state = 167;
				this.match(MoveParser.T__6);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 169;
				this.match(MoveParser.T__5);
				this.state = 170;
				this.moduleIdent();
				this.state = 171;
				this.match(MoveParser.T__2);
				this.state = 172;
				this.useMember();
				this.state = 173;
				this.match(MoveParser.T__6);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 175;
				this.match(MoveParser.T__5);
				this.state = 176;
				this.moduleIdent();
				this.state = 177;
				this.match(MoveParser.T__2);
				this.state = 178;
				this.match(MoveParser.T__3);
				this.state = 179;
				this.useMember();
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MoveParser.T__7) {
					{
					{
					this.state = 180;
					this.match(MoveParser.T__7);
					this.state = 181;
					this.useMember();
					}
					}
					this.state = 186;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 187;
				this.match(MoveParser.T__4);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public useMember(): UseMemberContext {
		let _localctx: UseMemberContext = new UseMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MoveParser.RULE_useMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.match(MoveParser.Identifier);
			this.state = 192;
			this.useAlias();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public useAlias(): UseAliasContext {
		let _localctx: UseAliasContext = new UseAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MoveParser.RULE_useAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MoveParser.T__8) {
				{
				this.state = 194;
				this.match(MoveParser.T__8);
				this.state = 195;
				this.match(MoveParser.Identifier);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public script(): ScriptContext {
		let _localctx: ScriptContext = new ScriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MoveParser.RULE_script);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.match(MoveParser.T__9);
			this.state = 199;
			this.match(MoveParser.T__3);
			this.state = 205;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 200;
					this.attributes();
					this.state = 201;
					this.useDecl();
					}
					}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 213;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 208;
					this.attributes();
					this.state = 209;
					this.constantDecl();
					}
					}
				}
				this.state = 215;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 216;
			this.attributes();
			this.state = 217;
			this.docComments();
			this.state = 218;
			this.moduleMemberModifiers();
			this.state = 219;
			this.functionDecl();
			this.state = 220;
			this.match(MoveParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public friendDecl(): FriendDeclContext {
		let _localctx: FriendDeclContext = new FriendDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MoveParser.RULE_friendDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.match(MoveParser.T__10);
			this.state = 223;
			this.nameAccessChain();
			this.state = 224;
			this.match(MoveParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleMemberModifiers(): ModuleMemberModifiersContext {
		let _localctx: ModuleMemberModifiersContext = new ModuleMemberModifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MoveParser.RULE_moduleMemberModifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MoveParser.T__11 || _la === MoveParser.T__12) {
				{
				{
				this.state = 226;
				this.moduleMemberModifier();
				}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleMemberModifier(): ModuleMemberModifierContext {
		let _localctx: ModuleMemberModifierContext = new ModuleMemberModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MoveParser.RULE_moduleMemberModifier);
		try {
			this.state = 234;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MoveParser.T__12:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 232;
				this.visibility();
				}
				break;
			case MoveParser.T__11:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 233;
				this.match(MoveParser.T__11);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public visibility(): VisibilityContext {
		let _localctx: VisibilityContext = new VisibilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, MoveParser.RULE_visibility);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(MoveParser.T__12);
			this.state = 241;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MoveParser.T__13:
				{
				this.state = 237;
				this.match(MoveParser.T__13);
				this.state = 238;
				this.match(MoveParser.T__9);
				}
				break;
			case MoveParser.T__10:
				{
				this.state = 239;
				this.match(MoveParser.T__10);
				this.state = 240;
				this.match(MoveParser.T__14);
				}
				break;
			case MoveParser.T__11:
			case MoveParser.T__12:
			case MoveParser.T__31:
			case MoveParser.T__76:
			case MoveParser.T__77:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeValue(): AttributeValueContext {
		let _localctx: AttributeValueContext = new AttributeValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, MoveParser.RULE_attributeValue);
		try {
			this.state = 245;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MoveParser.T__70:
			case MoveParser.T__71:
			case MoveParser.T__73:
			case MoveParser.T__74:
			case MoveParser.T__75:
			case MoveParser.Digit:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 243;
				this.value();
				}
				break;
			case MoveParser.Identifier:
			case MoveParser.NumericalAddress:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 244;
				this.nameAccessChain();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, MoveParser.RULE_attribute);
		try {
			this.state = 256;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 247;
				this.match(MoveParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 248;
				this.match(MoveParser.Identifier);
				this.state = 249;
				this.match(MoveParser.T__15);
				this.state = 250;
				this.attributeValue();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 251;
				this.match(MoveParser.Identifier);
				this.state = 252;
				this.match(MoveParser.T__13);
				this.state = 253;
				this.commaAttribute();
				this.state = 254;
				this.match(MoveParser.T__14);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commaAttribute(): CommaAttributeContext {
		let _localctx: CommaAttributeContext = new CommaAttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, MoveParser.RULE_commaAttribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.attribute();
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MoveParser.T__7) {
				{
				{
				this.state = 259;
				this.match(MoveParser.T__7);
				this.state = 260;
				this.attribute();
				}
				}
				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributes(): AttributesContext {
		let _localctx: AttributesContext = new AttributesContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, MoveParser.RULE_attributes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MoveParser.T__16) {
				{
				{
				this.state = 266;
				this.match(MoveParser.T__16);
				this.state = 267;
				this.match(MoveParser.T__17);
				this.state = 268;
				this.commaAttribute();
				this.state = 269;
				this.match(MoveParser.T__18);
				}
				}
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, MoveParser.RULE_type);
		let _la: number;
		try {
			this.state = 296;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MoveParser.Identifier:
			case MoveParser.NumericalAddress:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 276;
				this.nameAccessChain();
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MoveParser.T__19) {
					{
					this.state = 277;
					this.match(MoveParser.T__19);
					this.state = 278;
					this.types();
					this.state = 279;
					this.match(MoveParser.T__20);
					}
				}

				}
				break;
			case MoveParser.T__21:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 283;
				this.match(MoveParser.T__21);
				this.state = 284;
				this.type();
				}
				break;
			case MoveParser.T__22:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 285;
				this.match(MoveParser.T__22);
				this.state = 286;
				this.type();
				}
				break;
			case MoveParser.T__23:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 287;
				this.match(MoveParser.T__23);
				this.state = 288;
				this.types();
				this.state = 289;
				this.match(MoveParser.T__23);
				this.state = 290;
				this.type();
				}
				break;
			case MoveParser.T__13:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 292;
				this.match(MoveParser.T__13);
				this.state = 293;
				this.types();
				this.state = 294;
				this.match(MoveParser.T__14);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public types(): TypesContext {
		let _localctx: TypesContext = new TypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, MoveParser.RULE_types);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this.type();
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MoveParser.T__7) {
				{
				{
				this.state = 299;
				this.match(MoveParser.T__7);
				this.state = 300;
				this.type();
				}
				}
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ability(): AbilityContext {
		let _localctx: AbilityContext = new AbilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, MoveParser.RULE_ability);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MoveParser.T__24) | (1 << MoveParser.T__25) | (1 << MoveParser.T__26) | (1 << MoveParser.T__27))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalTypeArgs(): OptionalTypeArgsContext {
		let _localctx: OptionalTypeArgsContext = new OptionalTypeArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, MoveParser.RULE_optionalTypeArgs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this.match(MoveParser.T__19);
			this.state = 309;
			this.types();
			this.state = 310;
			this.match(MoveParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, MoveParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this.match(MoveParser.Identifier);
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MoveParser.T__28) {
				{
				this.state = 313;
				this.constraint();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, MoveParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.typeParameter();
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MoveParser.T__7) {
				{
				{
				this.state = 317;
				this.match(MoveParser.T__7);
				this.state = 318;
				this.typeParameter();
				}
				}
				this.state = 323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraint(): ConstraintContext {
		let _localctx: ConstraintContext = new ConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, MoveParser.RULE_constraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.match(MoveParser.T__28);
			this.state = 325;
			this.ability();
			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MoveParser.T__29) {
				{
				{
				this.state = 326;
				this.match(MoveParser.T__29);
				this.state = 327;
				this.ability();
				}
				}
				this.state = 332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameterWithPhantomDecl(): TypeParameterWithPhantomDeclContext {
		let _localctx: TypeParameterWithPhantomDeclContext = new TypeParameterWithPhantomDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, MoveParser.RULE_typeParameterWithPhantomDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MoveParser.T__30) {
				{
				this.state = 333;
				this.match(MoveParser.T__30);
				}
			}

			this.state = 336;
			this.typeParameter();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameterWithPhantomDecls(): TypeParameterWithPhantomDeclsContext {
		let _localctx: TypeParameterWithPhantomDeclsContext = new TypeParameterWithPhantomDeclsContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, MoveParser.RULE_typeParameterWithPhantomDecls);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 338;
			this.typeParameterWithPhantomDecl();
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MoveParser.T__7) {
				{
				{
				this.state = 339;
				this.match(MoveParser.T__7);
				this.state = 340;
				this.typeParameterWithPhantomDecl();
				}
				}
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalTypeParameters(): OptionalTypeParametersContext {
		let _localctx: OptionalTypeParametersContext = new OptionalTypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, MoveParser.RULE_optionalTypeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MoveParser.T__19) {
				{
				this.state = 346;
				this.match(MoveParser.T__19);
				this.state = 347;
				this.typeParameters();
				this.state = 348;
				this.match(MoveParser.T__20);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structTypeParameter(): StructTypeParameterContext {
		let _localctx: StructTypeParameterContext = new StructTypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, MoveParser.RULE_structTypeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MoveParser.T__19) {
				{
				this.state = 352;
				this.match(MoveParser.T__19);
				this.state = 353;
				this.typeParameterWithPhantomDecls();
				this.state = 354;
				this.match(MoveParser.T__20);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDecl(): FunctionDeclContext {
		let _localctx: FunctionDeclContext = new FunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, MoveParser.RULE_functionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.match(MoveParser.T__31);
			this.state = 359;
			this.functionDefName();
			this.state = 360;
			this.parameters();
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MoveParser.T__28) {
				{
				this.state = 361;
				this.match(MoveParser.T__28);
				this.state = 362;
				this.type();
				}
			}

			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MoveParser.T__32) {
				{
				this.state = 365;
				this.match(MoveParser.T__32);
				this.state = 366;
				this.nameAccessChain();
				this.state = 371;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MoveParser.T__7) {
					{
					{
					this.state = 367;
					this.match(MoveParser.T__7);
					this.state = 368;
					this.nameAccessChain();
					}
					}
					this.state = 373;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 381;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MoveParser.T__3:
				{
				this.state = 376;
				this.match(MoveParser.T__3);
				this.state = 377;
				this.sequence();
				this.state = 378;
				this.match(MoveParser.T__4);
				}
				break;
			case MoveParser.T__6:
				{
				this.state = 380;
				this.match(MoveParser.T__6);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefName(): FunctionDefNameContext {
		let _localctx: FunctionDefNameContext = new FunctionDefNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, MoveParser.RULE_functionDefName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.match(MoveParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, MoveParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
			this.parameter();
			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MoveParser.T__7) {
				{
				{
				this.state = 386;
				this.match(MoveParser.T__7);
				this.state = 387;
				this.parameter();
				}
				}
				this.state = 392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, MoveParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
			this.var();
			this.state = 394;
			this.match(MoveParser.T__28);
			this.state = 395;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sequence(): SequenceContext {
		let _localctx: SequenceContext = new SequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, MoveParser.RULE_sequence);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MoveParser.T__5) {
				{
				{
				this.state = 397;
				this.useDecl();
				}
				}
				this.state = 402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 408;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 403;
					this.sequenceItem();
					this.state = 404;
					this.match(MoveParser.T__6);
					}
					}
				}
				this.state = 410;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			this.state = 412;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MoveParser.T__3) | (1 << MoveParser.T__13) | (1 << MoveParser.T__21) | (1 << MoveParser.T__22) | (1 << MoveParser.T__23) | (1 << MoveParser.T__24))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (MoveParser.T__34 - 35)) | (1 << (MoveParser.T__35 - 35)) | (1 << (MoveParser.T__36 - 35)) | (1 << (MoveParser.T__37 - 35)) | (1 << (MoveParser.T__39 - 35)) | (1 << (MoveParser.T__40 - 35)) | (1 << (MoveParser.T__41 - 35)) | (1 << (MoveParser.T__42 - 35)) | (1 << (MoveParser.T__55 - 35)) | (1 << (MoveParser.T__58 - 35)) | (1 << (MoveParser.T__59 - 35)) | (1 << (MoveParser.T__61 - 35)) | (1 << (MoveParser.T__62 - 35)) | (1 << (MoveParser.T__64 - 35)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (MoveParser.T__70 - 71)) | (1 << (MoveParser.T__71 - 71)) | (1 << (MoveParser.T__73 - 71)) | (1 << (MoveParser.T__74 - 71)) | (1 << (MoveParser.T__75 - 71)) | (1 << (MoveParser.Digit - 71)))) !== 0)) {
				{
				this.state = 411;
				this.exp();
				}
			}

			this.state = 414;
			this.match(MoveParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sequenceItem(): SequenceItemContext {
		let _localctx: SequenceItemContext = new SequenceItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, MoveParser.RULE_sequenceItem);
		let _la: number;
		try {
			this.state = 427;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MoveParser.T__3:
			case MoveParser.T__13:
			case MoveParser.T__21:
			case MoveParser.T__22:
			case MoveParser.T__23:
			case MoveParser.T__24:
			case MoveParser.T__34:
			case MoveParser.T__35:
			case MoveParser.T__36:
			case MoveParser.T__37:
			case MoveParser.T__39:
			case MoveParser.T__40:
			case MoveParser.T__41:
			case MoveParser.T__42:
			case MoveParser.T__55:
			case MoveParser.T__58:
			case MoveParser.T__59:
			case MoveParser.T__61:
			case MoveParser.T__62:
			case MoveParser.T__64:
			case MoveParser.T__70:
			case MoveParser.T__71:
			case MoveParser.T__73:
			case MoveParser.T__74:
			case MoveParser.T__75:
			case MoveParser.Digit:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 416;
				this.exp();
				}
				break;
			case MoveParser.T__33:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 417;
				this.match(MoveParser.T__33);
				this.state = 418;
				this.bindList();
				this.state = 421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MoveParser.T__28) {
					{
					this.state = 419;
					this.match(MoveParser.T__28);
					this.state = 420;
					this.type();
					}
				}

				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MoveParser.T__15) {
					{
					this.state = 423;
					this.match(MoveParser.T__15);
					this.state = 424;
					this.exp();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, MoveParser.RULE_term);
		let _la: number;
		try {
			this.state = 519;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 429;
				this.match(MoveParser.T__34);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 430;
				this.match(MoveParser.T__35);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 431;
				this.match(MoveParser.T__36);
				this.state = 436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MoveParser.T__19) {
					{
					this.state = 432;
					this.match(MoveParser.T__19);
					this.state = 433;
					this.types();
					this.state = 434;
					this.match(MoveParser.T__20);
					}
				}

				this.state = 438;
				this.match(MoveParser.T__17);
				this.state = 439;
				this.exps();
				this.state = 440;
				this.match(MoveParser.T__18);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 442;
				this.value();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 443;
				this.match(MoveParser.T__13);
				this.state = 444;
				this.exps();
				this.state = 445;
				this.match(MoveParser.T__14);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 447;
				this.match(MoveParser.T__13);
				this.state = 448;
				this.exp();
				this.state = 449;
				this.match(MoveParser.T__28);
				this.state = 450;
				this.type();
				this.state = 451;
				this.match(MoveParser.T__14);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 453;
				this.match(MoveParser.T__13);
				this.state = 454;
				this.exp();
				this.state = 455;
				this.match(MoveParser.T__8);
				this.state = 456;
				this.type();
				this.state = 457;
				this.match(MoveParser.T__14);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 459;
				this.match(MoveParser.T__3);
				this.state = 460;
				this.sequence();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 461;
				this.match(MoveParser.T__37);
				this.state = 462;
				this.match(MoveParser.T__13);
				this.state = 463;
				this.exp();
				this.state = 464;
				this.match(MoveParser.T__14);
				this.state = 465;
				this.exp();
				this.state = 466;
				this.match(MoveParser.T__38);
				this.state = 467;
				this.match(MoveParser.T__3);
				this.state = 468;
				this.exp();
				this.state = 469;
				this.match(MoveParser.T__4);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 471;
				this.match(MoveParser.T__37);
				this.state = 472;
				this.match(MoveParser.T__13);
				this.state = 473;
				this.exp();
				this.state = 474;
				this.match(MoveParser.T__14);
				this.state = 475;
				this.match(MoveParser.T__3);
				this.state = 476;
				this.exp();
				this.state = 477;
				this.match(MoveParser.T__4);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 479;
				this.match(MoveParser.T__37);
				this.state = 480;
				this.match(MoveParser.T__13);
				this.state = 481;
				this.exp();
				this.state = 482;
				this.match(MoveParser.T__14);
				this.state = 483;
				this.exp();
				this.state = 486;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 484;
					this.match(MoveParser.T__38);
					this.state = 485;
					this.exp();
					}
					break;
				}
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 488;
				this.match(MoveParser.T__39);
				this.state = 489;
				this.match(MoveParser.T__13);
				this.state = 490;
				this.exp();
				this.state = 491;
				this.match(MoveParser.T__14);
				this.state = 492;
				this.match(MoveParser.T__3);
				this.state = 493;
				this.exp();
				this.state = 494;
				this.match(MoveParser.T__4);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 496;
				this.match(MoveParser.T__40);
				this.state = 497;
				this.exp();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 498;
				this.match(MoveParser.T__40);
				this.state = 499;
				this.match(MoveParser.T__3);
				this.state = 500;
				this.exp();
				this.state = 501;
				this.match(MoveParser.T__4);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 503;
				this.match(MoveParser.T__41);
				this.state = 504;
				this.match(MoveParser.T__3);
				this.state = 505;
				this.exp();
				this.state = 506;
				this.match(MoveParser.T__4);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 508;
				this.match(MoveParser.T__41);
				this.state = 510;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 509;
					this.exp();
					}
					break;
				}
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 512;
				this.match(MoveParser.T__42);
				this.state = 513;
				this.match(MoveParser.T__3);
				this.state = 514;
				this.exp();
				this.state = 515;
				this.match(MoveParser.T__4);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 517;
				this.match(MoveParser.T__42);
				this.state = 518;
				this.exp();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exp(): ExpContext {
		let _localctx: ExpContext = new ExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, MoveParser.RULE_exp);
		try {
			this.state = 530;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 521;
				this.lambdaBindList();
				this.state = 522;
				this.exp();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 524;
				this.quantifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 525;
				this.binOpExp();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 526;
				this.unaryExp();
				this.state = 527;
				this.match(MoveParser.T__15);
				this.state = 528;
				this.exp();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binOp(): BinOpContext {
		let _localctx: BinOpContext = new BinOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, MoveParser.RULE_binOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MoveParser.T__19) | (1 << MoveParser.T__20) | (1 << MoveParser.T__21) | (1 << MoveParser.T__23) | (1 << MoveParser.T__29))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (MoveParser.T__43 - 44)) | (1 << (MoveParser.T__44 - 44)) | (1 << (MoveParser.T__45 - 44)) | (1 << (MoveParser.T__46 - 44)) | (1 << (MoveParser.T__47 - 44)) | (1 << (MoveParser.T__48 - 44)) | (1 << (MoveParser.T__49 - 44)) | (1 << (MoveParser.T__50 - 44)) | (1 << (MoveParser.T__51 - 44)) | (1 << (MoveParser.T__52 - 44)) | (1 << (MoveParser.T__53 - 44)) | (1 << (MoveParser.T__54 - 44)) | (1 << (MoveParser.T__55 - 44)) | (1 << (MoveParser.T__56 - 44)) | (1 << (MoveParser.T__57 - 44)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binOpExp(): BinOpExpContext {
		let _localctx: BinOpExpContext = new BinOpExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, MoveParser.RULE_binOpExp);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this.unaryExp();
			this.state = 540;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 535;
					this.binOp();
					this.state = 536;
					this.unaryExp();
					}
					}
				}
				this.state = 542;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExp(): UnaryExpContext {
		let _localctx: UnaryExpContext = new UnaryExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, MoveParser.RULE_unaryExp);
		try {
			this.state = 556;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MoveParser.T__58:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 543;
				this.match(MoveParser.T__58);
				this.state = 544;
				this.unaryExp();
				}
				break;
			case MoveParser.T__22:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 545;
				this.match(MoveParser.T__22);
				this.state = 546;
				this.unaryExp();
				}
				break;
			case MoveParser.T__21:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 547;
				this.match(MoveParser.T__21);
				this.state = 548;
				this.unaryExp();
				}
				break;
			case MoveParser.T__55:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 549;
				this.match(MoveParser.T__55);
				this.state = 550;
				this.unaryExp();
				}
				break;
			case MoveParser.T__59:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 551;
				this.match(MoveParser.T__59);
				this.state = 552;
				this.var();
				}
				break;
			case MoveParser.T__24:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 553;
				this.match(MoveParser.T__24);
				this.state = 554;
				this.var();
				}
				break;
			case MoveParser.T__3:
			case MoveParser.T__13:
			case MoveParser.T__34:
			case MoveParser.T__35:
			case MoveParser.T__36:
			case MoveParser.T__37:
			case MoveParser.T__39:
			case MoveParser.T__40:
			case MoveParser.T__41:
			case MoveParser.T__42:
			case MoveParser.T__70:
			case MoveParser.T__71:
			case MoveParser.T__73:
			case MoveParser.T__74:
			case MoveParser.T__75:
			case MoveParser.Digit:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 555;
				this.dotOrIndexChain();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dotOrIndexChain(): DotOrIndexChainContext {
		let _localctx: DotOrIndexChainContext = new DotOrIndexChainContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, MoveParser.RULE_dotOrIndexChain);
		try {
			let _alt: number;
			this.state = 576;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 558;
				this.term();
				this.state = 563;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 559;
						this.match(MoveParser.T__60);
						this.state = 560;
						this.match(MoveParser.Identifier);
						}
						}
					}
					this.state = 565;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 566;
				this.term();
				this.state = 573;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 567;
						this.match(MoveParser.T__17);
						this.state = 568;
						this.exp();
						this.state = 569;
						this.match(MoveParser.T__18);
						}
						}
					}
					this.state = 575;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantifier(): QuantifierContext {
		let _localctx: QuantifierContext = new QuantifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, MoveParser.RULE_quantifier);
		let _la: number;
		try {
			this.state = 609;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MoveParser.T__61:
			case MoveParser.T__62:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 578;
				_la = this._input.LA(1);
				if (!(_la === MoveParser.T__61 || _la === MoveParser.T__62)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 579;
				this.quantifierBindings();
				this.state = 590;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MoveParser.T__3) {
					{
					{
					this.state = 580;
					this.match(MoveParser.T__3);
					this.state = 584;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MoveParser.T__3) | (1 << MoveParser.T__13) | (1 << MoveParser.T__21) | (1 << MoveParser.T__22) | (1 << MoveParser.T__23) | (1 << MoveParser.T__24))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (MoveParser.T__34 - 35)) | (1 << (MoveParser.T__35 - 35)) | (1 << (MoveParser.T__36 - 35)) | (1 << (MoveParser.T__37 - 35)) | (1 << (MoveParser.T__39 - 35)) | (1 << (MoveParser.T__40 - 35)) | (1 << (MoveParser.T__41 - 35)) | (1 << (MoveParser.T__42 - 35)) | (1 << (MoveParser.T__55 - 35)) | (1 << (MoveParser.T__58 - 35)) | (1 << (MoveParser.T__59 - 35)) | (1 << (MoveParser.T__61 - 35)) | (1 << (MoveParser.T__62 - 35)) | (1 << (MoveParser.T__64 - 35)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (MoveParser.T__70 - 71)) | (1 << (MoveParser.T__71 - 71)) | (1 << (MoveParser.T__73 - 71)) | (1 << (MoveParser.T__74 - 71)) | (1 << (MoveParser.T__75 - 71)) | (1 << (MoveParser.Digit - 71)))) !== 0)) {
						{
						{
						this.state = 581;
						this.exp();
						}
						}
						this.state = 586;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 587;
					this.match(MoveParser.T__4);
					}
					}
					this.state = 592;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MoveParser.T__63) {
					{
					this.state = 593;
					this.match(MoveParser.T__63);
					this.state = 594;
					this.exp();
					}
				}

				this.state = 597;
				this.match(MoveParser.T__28);
				this.state = 598;
				this.exp();
				}
				break;
			case MoveParser.T__64:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 600;
				this.match(MoveParser.T__64);
				this.state = 601;
				this.match(MoveParser.T__17);
				this.state = 602;
				this.match(MoveParser.T__65);
				this.state = 603;
				this.match(MoveParser.T__18);
				}
				this.state = 605;
				this.quantifierBind();
				this.state = 606;
				this.match(MoveParser.T__63);
				this.state = 607;
				this.exp();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantifierBindings(): QuantifierBindingsContext {
		let _localctx: QuantifierBindingsContext = new QuantifierBindingsContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, MoveParser.RULE_quantifierBindings);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 611;
			this.quantifierBind();
			this.state = 616;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MoveParser.T__7) {
				{
				{
				this.state = 612;
				this.match(MoveParser.T__7);
				this.state = 613;
				this.quantifierBind();
				}
				}
				this.state = 618;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantifierBind(): QuantifierBindContext {
		let _localctx: QuantifierBindContext = new QuantifierBindContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, MoveParser.RULE_quantifierBind);
		try {
			this.state = 625;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 619;
				this.match(MoveParser.Identifier);
				this.state = 620;
				this.match(MoveParser.T__28);
				this.state = 621;
				this.type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 622;
				this.match(MoveParser.Identifier);
				this.state = 623;
				this.match(MoveParser.T__66);
				this.state = 624;
				this.exp();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exps(): ExpsContext {
		let _localctx: ExpsContext = new ExpsContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, MoveParser.RULE_exps);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 627;
			this.exp();
			this.state = 632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MoveParser.T__7) {
				{
				{
				this.state = 628;
				this.match(MoveParser.T__7);
				this.state = 629;
				this.exp();
				}
				}
				this.state = 634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expField(): ExpFieldContext {
		let _localctx: ExpFieldContext = new ExpFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, MoveParser.RULE_expField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 635;
			this.field();
			this.state = 641;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MoveParser.T__19) {
				{
				this.state = 636;
				this.match(MoveParser.T__19);
				this.state = 637;
				this.match(MoveParser.T__28);
				this.state = 638;
				this.exp();
				this.state = 639;
				this.match(MoveParser.T__20);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bindField(): BindFieldContext {
		let _localctx: BindFieldContext = new BindFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, MoveParser.RULE_bindField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 643;
			this.field();
			this.state = 649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MoveParser.T__19) {
				{
				this.state = 644;
				this.match(MoveParser.T__19);
				this.state = 645;
				this.match(MoveParser.T__28);
				this.state = 646;
				this.bind();
				this.state = 647;
				this.match(MoveParser.T__20);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bindFields(): BindFieldsContext {
		let _localctx: BindFieldsContext = new BindFieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, MoveParser.RULE_bindFields);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 651;
			this.bindField();
			this.state = 656;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MoveParser.T__7) {
				{
				{
				this.state = 652;
				this.match(MoveParser.T__7);
				this.state = 653;
				this.bindField();
				}
				}
				this.state = 658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bind(): BindContext {
		let _localctx: BindContext = new BindContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, MoveParser.RULE_bind);
		try {
			this.state = 666;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 659;
				this.var();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 660;
				this.nameAccessChain();
				this.state = 661;
				this.optionalTypeArgs();
				this.state = 662;
				this.match(MoveParser.T__3);
				this.state = 663;
				this.bindFields();
				this.state = 664;
				this.match(MoveParser.T__4);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binds(): BindsContext {
		let _localctx: BindsContext = new BindsContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, MoveParser.RULE_binds);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 668;
			this.bind();
			this.state = 673;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MoveParser.T__7) {
				{
				{
				this.state = 669;
				this.match(MoveParser.T__7);
				this.state = 670;
				this.bind();
				}
				}
				this.state = 675;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bindList(): BindListContext {
		let _localctx: BindListContext = new BindListContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, MoveParser.RULE_bindList);
		try {
			this.state = 681;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MoveParser.Identifier:
			case MoveParser.NumericalAddress:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 676;
				this.bind();
				}
				break;
			case MoveParser.T__13:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 677;
				this.match(MoveParser.T__13);
				this.state = 678;
				this.binds();
				this.state = 679;
				this.match(MoveParser.T__14);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaBindList(): LambdaBindListContext {
		let _localctx: LambdaBindListContext = new LambdaBindListContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, MoveParser.RULE_lambdaBindList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 683;
			this.match(MoveParser.T__23);
			this.state = 684;
			this.binds();
			this.state = 685;
			this.match(MoveParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, MoveParser.RULE_number);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 688;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 687;
					this.match(MoveParser.Digit);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 690;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numberTyped(): NumberTypedContext {
		let _localctx: NumberTypedContext = new NumberTypedContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, MoveParser.RULE_numberTyped);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 692;
			this.number();
			this.state = 693;
			_la = this._input.LA(1);
			if (!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (MoveParser.T__67 - 68)) | (1 << (MoveParser.T__68 - 68)) | (1 << (MoveParser.T__69 - 68)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public byteString(): ByteStringContext {
		let _localctx: ByteStringContext = new ByteStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, MoveParser.RULE_byteString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
			_la = this._input.LA(1);
			if (!(_la === MoveParser.T__70 || _la === MoveParser.T__71)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MoveParser.Alphanumeric) {
				{
				{
				this.state = 696;
				this.match(MoveParser.Alphanumeric);
				}
				}
				this.state = 701;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 702;
			this.match(MoveParser.T__72);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, MoveParser.RULE_value);
		try {
			this.state = 711;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 704;
				this.match(MoveParser.T__73);
				this.state = 705;
				this.leadingNameAccess();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 706;
				this.match(MoveParser.T__74);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 707;
				this.match(MoveParser.T__75);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 708;
				this.number();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 709;
				this.numberTyped();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 710;
				this.byteString();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantDecl(): ConstantDeclContext {
		let _localctx: ConstantDeclContext = new ConstantDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, MoveParser.RULE_constantDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 713;
			this.match(MoveParser.T__76);
			this.state = 714;
			this.match(MoveParser.Identifier);
			this.state = 715;
			this.match(MoveParser.T__28);
			this.state = 716;
			this.type();
			this.state = 717;
			this.match(MoveParser.T__15);
			this.state = 718;
			this.exp();
			this.state = 719;
			this.match(MoveParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDecl(): StructDeclContext {
		let _localctx: StructDeclContext = new StructDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, MoveParser.RULE_structDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 721;
			this.match(MoveParser.T__77);
			this.state = 722;
			this.structDefName();
			this.state = 731;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MoveParser.T__78) {
				{
				this.state = 723;
				this.match(MoveParser.T__78);
				this.state = 724;
				this.ability();
				this.state = 727;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 725;
					this.match(MoveParser.T__7);
					this.state = 726;
					this.ability();
					}
					}
					this.state = 729;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === MoveParser.T__7);
				}
			}

			this.state = 738;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MoveParser.T__3:
				{
				this.state = 733;
				this.match(MoveParser.T__3);
				this.state = 734;
				this.fieldAnnot();
				this.state = 735;
				this.match(MoveParser.T__4);
				}
				break;
			case MoveParser.T__6:
				{
				this.state = 737;
				this.match(MoveParser.T__6);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDefName(): StructDefNameContext {
		let _localctx: StructDefNameContext = new StructDefNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, MoveParser.RULE_structDefName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 740;
			this.match(MoveParser.Identifier);
			this.state = 741;
			this.optionalTypeParameters();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldAnnots(): FieldAnnotsContext {
		let _localctx: FieldAnnotsContext = new FieldAnnotsContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, MoveParser.RULE_fieldAnnots);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 743;
			this.fieldAnnot();
			this.state = 748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MoveParser.T__7) {
				{
				{
				this.state = 744;
				this.match(MoveParser.T__7);
				this.state = 745;
				this.fieldAnnot();
				}
				}
				this.state = 750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldAnnot(): FieldAnnotContext {
		let _localctx: FieldAnnotContext = new FieldAnnotContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, MoveParser.RULE_fieldAnnot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 751;
			this.docComments();
			this.state = 752;
			this.field();
			this.state = 753;
			this.match(MoveParser.T__28);
			this.state = 754;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public docComments(): DocCommentsContext {
		let _localctx: DocCommentsContext = new DocCommentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, MoveParser.RULE_docComments);
		try {
			let _alt: number;
			this.state = 778;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MoveParser.T__79:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 756;
				this.match(MoveParser.T__79);
				this.state = 760;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 757;
						this.matchWildcard();
						}
						}
					}
					this.state = 762;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
				}
				this.state = 763;
				this.match(MoveParser.T__80);
				}
				break;
			case MoveParser.T__81:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 764;
				this.match(MoveParser.T__81);
				this.state = 768;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 765;
						this.matchWildcard();
						}
						}
					}
					this.state = 770;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				}
				}
				break;
			case MoveParser.T__82:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 771;
				this.match(MoveParser.T__82);
				this.state = 775;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 772;
						this.matchWildcard();
						}
						}
					}
					this.state = 777;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public leadingNameAccess(): LeadingNameAccessContext {
		let _localctx: LeadingNameAccessContext = new LeadingNameAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, MoveParser.RULE_leadingNameAccess);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			_la = this._input.LA(1);
			if (!(_la === MoveParser.Identifier || _la === MoveParser.NumericalAddress)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var(): VarContext {
		let _localctx: VarContext = new VarContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, MoveParser.RULE_var);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this.match(MoveParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, MoveParser.RULE_field);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 784;
			this.match(MoveParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleIdent(): ModuleIdentContext {
		let _localctx: ModuleIdentContext = new ModuleIdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, MoveParser.RULE_moduleIdent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 786;
			this.leadingNameAccess();
			this.state = 787;
			this.match(MoveParser.T__2);
			this.state = 788;
			this.moduleName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleName(): ModuleNameContext {
		let _localctx: ModuleNameContext = new ModuleNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, MoveParser.RULE_moduleName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
			this.match(MoveParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameAccessChain(): NameAccessChainContext {
		let _localctx: NameAccessChainContext = new NameAccessChainContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, MoveParser.RULE_nameAccessChain);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 792;
			this.leadingNameAccess();
			this.state = 799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MoveParser.T__2) {
				{
				this.state = 793;
				this.match(MoveParser.T__2);
				this.state = 794;
				this.match(MoveParser.Identifier);
				this.state = 797;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MoveParser.T__2) {
					{
					this.state = 795;
					this.match(MoveParser.T__2);
					this.state = 796;
					this.match(MoveParser.Identifier);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addressBlock(): AddressBlockContext {
		let _localctx: AddressBlockContext = new AddressBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, MoveParser.RULE_addressBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 801;
			this.match(MoveParser.T__83);
			this.state = 802;
			this.leadingNameAccess();
			this.state = 803;
			this.match(MoveParser.T__3);
			this.state = 809;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 804;
					this.attributes();
					this.state = 805;
					this.module();
					}
					}
				}
				this.state = 811;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
			}
			this.state = 812;
			this.match(MoveParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03Z\u0331\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x03\x02\x03\x02\x03\x02\x07" +
		"\x02\x88\n\x02\f\x02\x0E\x02\x8B\v\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03\x92\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x9F\n\x03\x05\x03" +
		"\xA1\n\x03\x05\x03\xA3\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xB9\n\x04\f\x04\x0E" +
		"\x04\xBC\v\x04\x03\x04\x03\x04\x05\x04\xC0\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x05\x06\xC7\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x07\x07\xCE\n\x07\f\x07\x0E\x07\xD1\v\x07\x03\x07\x03\x07\x03\x07" +
		"\x07\x07\xD6\n\x07\f\x07\x0E\x07\xD9\v\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x07\t\xE6\n\t\f\t\x0E" +
		"\t\xE9\v\t\x03\n\x03\n\x05\n\xED\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05" +
		"\v\xF4\n\v\x03\f\x03\f\x05\f\xF8\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\u0103\n\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0108" +
		"\n\x0E\f\x0E\x0E\x0E\u010B\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x07\x0F\u0112\n\x0F\f\x0F\x0E\x0F\u0115\v\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x05\x10\u011C\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\u012B\n\x10\x03\x11\x03\x11\x03\x11\x07\x11\u0130\n\x11\f\x11\x0E" +
		"\x11\u0133\v\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x05\x14\u013D\n\x14\x03\x15\x03\x15\x03\x15\x07\x15\u0142\n\x15" +
		"\f\x15\x0E\x15\u0145\v\x15\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u014B" +
		"\n\x16\f\x16\x0E\x16\u014E\v\x16\x03\x17\x05\x17\u0151\n\x17\x03\x17\x03" +
		"\x17\x03\x18\x03\x18\x03\x18\x07\x18\u0158\n\x18\f\x18\x0E\x18\u015B\v" +
		"\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0161\n\x19\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x05\x1A\u0167\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x05\x1B\u016E\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0174" +
		"\n\x1B\f\x1B\x0E\x1B\u0177\v\x1B\x05\x1B\u0179\n\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x05\x1B\u0180\n\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x07\x1D\u0187\n\x1D\f\x1D\x0E\x1D\u018A\v\x1D\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1F\x07\x1F\u0191\n\x1F\f\x1F\x0E\x1F\u0194\v\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0199\n\x1F\f\x1F\x0E\x1F\u019C\v\x1F" +
		"\x03\x1F\x05\x1F\u019F\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 " +
		"\x05 \u01A8\n \x03 \x03 \x05 \u01AC\n \x05 \u01AE\n \x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x05!\u01B7\n!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u01E9" +
		"\n!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u0201\n!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x05!\u020A\n!\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x05\"\u0215\n\"\x03#\x03#\x03$\x03$\x03$\x03$\x07" +
		"$\u021D\n$\f$\x0E$\u0220\v$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x03%\x03%\x05%\u022F\n%\x03&\x03&\x03&\x07&\u0234\n&\f&\x0E" +
		"&\u0237\v&\x03&\x03&\x03&\x03&\x03&\x07&\u023E\n&\f&\x0E&\u0241\v&\x05" +
		"&\u0243\n&\x03\'\x03\'\x03\'\x03\'\x07\'\u0249\n\'\f\'\x0E\'\u024C\v\'" +
		"\x03\'\x07\'\u024F\n\'\f\'\x0E\'\u0252\v\'\x03\'\x03\'\x05\'\u0256\n\'" +
		"\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x05\'\u0264\n\'\x03(\x03(\x03(\x07(\u0269\n(\f(\x0E(\u026C\v(\x03)" +
		"\x03)\x03)\x03)\x03)\x03)\x05)\u0274\n)\x03*\x03*\x03*\x07*\u0279\n*\f" +
		"*\x0E*\u027C\v*\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u0284\n+\x03,\x03," +
		"\x03,\x03,\x03,\x03,\x05,\u028C\n,\x03-\x03-\x03-\x07-\u0291\n-\f-\x0E" +
		"-\u0294\v-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u029D\n.\x03/\x03/" +
		"\x03/\x07/\u02A2\n/\f/\x0E/\u02A5\v/\x030\x030\x030\x030\x030\x050\u02AC" +
		"\n0\x031\x031\x031\x031\x032\x062\u02B3\n2\r2\x0E2\u02B4\x033\x033\x03" +
		"3\x034\x034\x074\u02BC\n4\f4\x0E4\u02BF\v4\x034\x034\x035\x035\x035\x03" +
		"5\x035\x035\x035\x055\u02CA\n5\x036\x036\x036\x036\x036\x036\x036\x03" +
		"6\x037\x037\x037\x037\x037\x037\x067\u02DA\n7\r7\x0E7\u02DB\x057\u02DE" +
		"\n7\x037\x037\x037\x037\x037\x057\u02E5\n7\x038\x038\x038\x039\x039\x03" +
		"9\x079\u02ED\n9\f9\x0E9\u02F0\v9\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x07" +
		";\u02F9\n;\f;\x0E;\u02FC\v;\x03;\x03;\x03;\x07;\u0301\n;\f;\x0E;\u0304" +
		"\v;\x03;\x03;\x07;\u0308\n;\f;\x0E;\u030B\v;\x05;\u030D\n;\x03<\x03<\x03" +
		"=\x03=\x03>\x03>\x03?\x03?\x03?\x03?\x03@\x03@\x03A\x03A\x03A\x03A\x03" +
		"A\x05A\u0320\nA\x05A\u0322\nA\x03B\x03B\x03B\x03B\x03B\x03B\x07B\u032A" +
		"\nB\fB\x0EB\u032D\vB\x03B\x03B\x03B\x05\u02FA\u0302\u0309\x02\x02C\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
		"H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
		"d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
		"\x80\x02\x82\x02\x02\t\x03\x02\x03\x04\x03\x02\x1B\x1E\x06\x02\x16\x18" +
		"\x1A\x1A  .<\x03\x02@A\x03\x02FH\x03\x02IJ\x03\x02YZ\x02\u0361\x02\x89" +
		"\x03\x02\x02\x02\x04\x8C\x03\x02\x02\x02\x06\xBF\x03\x02\x02\x02\b\xC1" +
		"\x03\x02\x02\x02\n\xC6\x03\x02\x02\x02\f\xC8\x03\x02\x02\x02\x0E\xE0\x03" +
		"\x02\x02\x02\x10\xE7\x03\x02\x02\x02\x12\xEC\x03\x02\x02\x02\x14\xEE\x03" +
		"\x02\x02\x02\x16\xF7\x03\x02\x02\x02\x18\u0102\x03\x02\x02\x02\x1A\u0104" +
		"\x03\x02\x02\x02\x1C\u0113\x03\x02\x02\x02\x1E\u012A\x03\x02\x02\x02 " +
		"\u012C\x03\x02\x02\x02\"\u0134\x03\x02\x02\x02$\u0136\x03\x02\x02\x02" +
		"&\u013A\x03\x02\x02\x02(\u013E\x03\x02\x02\x02*\u0146\x03\x02\x02\x02" +
		",\u0150\x03\x02\x02\x02.\u0154\x03\x02\x02\x020\u0160\x03\x02\x02\x02" +
		"2\u0166\x03\x02\x02\x024\u0168\x03\x02\x02\x026\u0181\x03\x02\x02\x02" +
		"8\u0183\x03\x02\x02\x02:\u018B\x03\x02\x02\x02<\u0192\x03\x02\x02\x02" +
		">\u01AD\x03\x02\x02\x02@\u0209\x03\x02\x02\x02B\u0214\x03\x02\x02\x02" +
		"D\u0216\x03\x02\x02\x02F\u0218\x03\x02\x02\x02H\u022E\x03\x02\x02\x02" +
		"J\u0242\x03\x02\x02\x02L\u0263\x03\x02\x02\x02N\u0265\x03\x02\x02\x02" +
		"P\u0273\x03\x02\x02\x02R\u0275\x03\x02\x02\x02T\u027D\x03\x02\x02\x02" +
		"V\u0285\x03\x02\x02\x02X\u028D\x03\x02\x02\x02Z\u029C\x03\x02\x02\x02" +
		"\\\u029E\x03\x02\x02\x02^\u02AB\x03\x02\x02\x02`\u02AD\x03\x02\x02\x02" +
		"b\u02B2\x03\x02\x02\x02d\u02B6\x03\x02\x02\x02f\u02B9\x03\x02\x02\x02" +
		"h\u02C9\x03\x02\x02\x02j\u02CB\x03\x02\x02\x02l\u02D3\x03\x02\x02\x02" +
		"n\u02E6\x03\x02\x02\x02p\u02E9\x03\x02\x02\x02r\u02F1\x03\x02\x02\x02" +
		"t\u030C\x03\x02\x02\x02v\u030E\x03\x02\x02\x02x\u0310\x03\x02\x02\x02" +
		"z\u0312\x03\x02\x02\x02|\u0314\x03\x02\x02\x02~\u0318\x03\x02\x02\x02" +
		"\x80\u031A\x03\x02\x02\x02\x82\u0323\x03\x02\x02\x02\x84\x88\x05\x82B" +
		"\x02\x85\x88\x05\x04\x03\x02\x86\x88\x05\f\x07\x02\x87\x84\x03\x02\x02" +
		"\x02\x87\x85\x03\x02\x02\x02\x87\x86\x03\x02\x02\x02\x88\x8B\x03\x02\x02" +
		"\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x03\x03\x02\x02" +
		"\x02\x8B\x89\x03\x02\x02\x02\x8C\x8D\x05t;\x02\x8D\x91\t\x02\x02\x02\x8E" +
		"\x8F\x05v<\x02\x8F\x90\x07\x05\x02\x02\x90\x92\x03\x02\x02\x02\x91\x8E" +
		"\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94" +
		"\x05~@\x02\x94\x95\x07\x06\x02\x02\x95\xA2\x05\x1C\x0F\x02\x96\xA3\x05" +
		"\x06\x04\x02\x97\xA3\x05\x0E\b\x02\x98\xA3\x03\x02\x02\x02\x99\x9A\x05" +
		"t;\x02\x9A\x9E\x05\x10\t\x02\x9B\x9F\x05j6\x02\x9C\x9F\x05l7\x02\x9D\x9F" +
		"\x054\x1B\x02\x9E\x9B\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9D" +
		"\x03\x02\x02\x02\x9F\xA1\x03\x02\x02\x02\xA0\x99\x03\x02\x02\x02\xA0\xA1" +
		"\x03\x02\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2\x96\x03\x02\x02\x02\xA2\x97" +
		"\x03\x02\x02\x02\xA2\x98\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA4" +
		"\x03\x02\x02\x02\xA4\xA5\x07\x07\x02\x02\xA5\x05\x03\x02\x02\x02\xA6\xA7" +
		"\x07\b\x02\x02\xA7\xA8\x05|?\x02\xA8\xA9\x05\n\x06\x02\xA9\xAA\x07\t\x02" +
		"\x02\xAA\xC0\x03\x02\x02\x02\xAB\xAC\x07\b\x02\x02\xAC\xAD\x05|?\x02\xAD" +
		"\xAE\x07\x05\x02\x02\xAE\xAF\x05\b\x05\x02\xAF\xB0\x07\t\x02\x02\xB0\xC0" +
		"\x03\x02\x02\x02\xB1\xB2\x07\b\x02\x02\xB2\xB3\x05|?\x02\xB3\xB4\x07\x05" +
		"\x02\x02\xB4\xB5\x07\x06\x02\x02\xB5\xBA\x05\b\x05\x02\xB6\xB7\x07\n\x02" +
		"\x02\xB7\xB9\x05\b\x05\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBC\x03\x02\x02" +
		"\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBD\x03\x02\x02" +
		"\x02\xBC\xBA\x03\x02\x02\x02\xBD\xBE\x07\x07\x02\x02\xBE\xC0\x03\x02\x02" +
		"\x02\xBF\xA6\x03\x02\x02\x02\xBF\xAB\x03\x02\x02\x02\xBF\xB1\x03\x02\x02" +
		"\x02\xC0\x07\x03\x02\x02\x02\xC1\xC2\x07Y\x02\x02\xC2\xC3\x05\n\x06\x02" +
		"\xC3\t\x03\x02\x02\x02\xC4\xC5\x07\v\x02\x02\xC5\xC7\x07Y\x02\x02\xC6" +
		"\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\v\x03\x02\x02\x02\xC8" +
		"\xC9\x07\f\x02\x02\xC9\xCF\x07\x06\x02\x02\xCA\xCB\x05\x1C\x0F\x02\xCB" +
		"\xCC\x05\x06\x04\x02\xCC\xCE\x03\x02\x02\x02\xCD\xCA\x03\x02\x02\x02\xCE" +
		"\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0" +
		"\xD7\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD3\x05\x1C\x0F\x02\xD3" +
		"\xD4\x05j6\x02\xD4\xD6\x03\x02\x02\x02\xD5\xD2\x03\x02\x02\x02\xD6\xD9" +
		"\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xDA" +
		"\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDB\x05\x1C\x0F\x02\xDB\xDC" +
		"\x05t;\x02\xDC\xDD\x05\x10\t\x02\xDD\xDE\x054\x1B\x02\xDE\xDF\x07\x07" +
		"\x02\x02\xDF\r\x03\x02\x02\x02\xE0\xE1\x07\r\x02\x02\xE1\xE2\x05\x80A" +
		"\x02\xE2\xE3\x07\t\x02\x02\xE3\x0F\x03\x02\x02\x02\xE4\xE6\x05\x12\n\x02" +
		"\xE5\xE4\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02" +
		"\xE7\xE8\x03\x02\x02\x02\xE8\x11\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02" +
		"\xEA\xED\x05\x14\v\x02\xEB\xED\x07\x0E\x02\x02\xEC\xEA\x03\x02\x02\x02" +
		"\xEC\xEB\x03\x02\x02\x02\xED\x13\x03\x02\x02\x02\xEE\xF3\x07\x0F\x02\x02" +
		"\xEF\xF0\x07\x10\x02\x02\xF0\xF4\x07\f\x02\x02\xF1\xF2\x07\r\x02\x02\xF2" +
		"\xF4\x07\x11\x02\x02\xF3\xEF\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3" +
		"\xF4\x03\x02\x02\x02\xF4\x15\x03\x02\x02\x02\xF5\xF8\x05h5\x02\xF6\xF8" +
		"\x05\x80A\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF6\x03\x02\x02\x02\xF8\x17" +
		"\x03\x02\x02\x02\xF9\u0103\x07Y\x02\x02\xFA\xFB\x07Y\x02\x02\xFB\xFC\x07" +
		"\x12\x02\x02\xFC\u0103\x05\x16\f\x02\xFD\xFE\x07Y\x02\x02\xFE\xFF\x07" +
		"\x10\x02\x02\xFF\u0100\x05\x1A\x0E\x02\u0100\u0101\x07\x11\x02\x02\u0101" +
		"\u0103\x03\x02\x02\x02\u0102\xF9\x03\x02\x02\x02\u0102\xFA\x03\x02\x02" +
		"\x02\u0102\xFD\x03\x02\x02\x02\u0103\x19\x03\x02\x02\x02\u0104\u0109\x05" +
		"\x18\r\x02\u0105\u0106\x07\n\x02\x02\u0106\u0108\x05\x18\r\x02\u0107\u0105" +
		"\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02" +
		"\u0109\u010A\x03\x02\x02\x02\u010A\x1B\x03\x02\x02\x02\u010B\u0109\x03" +
		"\x02\x02\x02\u010C\u010D\x07\x13\x02\x02\u010D\u010E\x07\x14\x02\x02\u010E" +
		"\u010F\x05\x1A\x0E\x02\u010F\u0110\x07\x15\x02\x02\u0110\u0112\x03\x02" +
		"\x02\x02\u0111\u010C\x03\x02\x02\x02\u0112\u0115\x03\x02\x02\x02\u0113" +
		"\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\x1D\x03\x02\x02" +
		"\x02\u0115\u0113\x03\x02\x02\x02\u0116\u011B\x05\x80A\x02\u0117\u0118" +
		"\x07\x16\x02\x02\u0118\u0119\x05 \x11\x02\u0119\u011A\x07\x17\x02\x02" +
		"\u011A\u011C\x03\x02\x02\x02\u011B\u0117\x03\x02\x02\x02\u011B\u011C\x03" +
		"\x02\x02\x02\u011C\u012B\x03\x02\x02\x02\u011D\u011E\x07\x18\x02\x02\u011E" +
		"\u012B\x05\x1E\x10\x02\u011F\u0120\x07\x19\x02\x02\u0120\u012B\x05\x1E" +
		"\x10\x02\u0121\u0122\x07\x1A\x02\x02\u0122\u0123\x05 \x11\x02\u0123\u0124" +
		"\x07\x1A\x02\x02\u0124\u0125\x05\x1E\x10\x02\u0125\u012B\x03\x02\x02\x02" +
		"\u0126\u0127\x07\x10\x02\x02\u0127\u0128\x05 \x11\x02\u0128\u0129\x07" +
		"\x11\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A\u0116\x03\x02\x02\x02\u012A" +
		"\u011D\x03\x02\x02\x02\u012A\u011F\x03\x02\x02\x02\u012A\u0121\x03\x02" +
		"\x02\x02\u012A\u0126\x03\x02\x02\x02\u012B\x1F\x03\x02\x02\x02\u012C\u0131" +
		"\x05\x1E\x10\x02\u012D\u012E\x07\n\x02\x02\u012E\u0130\x05\x1E\x10\x02" +
		"\u012F\u012D\x03\x02\x02\x02\u0130\u0133\x03\x02\x02\x02\u0131\u012F\x03" +
		"\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132!\x03\x02\x02\x02\u0133" +
		"\u0131\x03\x02\x02\x02\u0134\u0135\t\x03\x02\x02\u0135#\x03\x02\x02\x02" +
		"\u0136\u0137\x07\x16\x02\x02\u0137\u0138\x05 \x11\x02\u0138\u0139\x07" +
		"\x17\x02\x02\u0139%\x03\x02\x02\x02\u013A\u013C\x07Y\x02\x02\u013B\u013D" +
		"\x05*\x16\x02\u013C\u013B\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02" +
		"\u013D\'\x03\x02\x02\x02\u013E\u0143\x05&\x14\x02\u013F\u0140\x07\n\x02" +
		"\x02\u0140\u0142\x05&\x14\x02\u0141\u013F\x03\x02\x02\x02\u0142\u0145" +
		"\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02" +
		"\u0144)\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0146\u0147\x07\x1F" +
		"\x02\x02\u0147\u014C\x05\"\x12\x02\u0148\u0149\x07 \x02\x02\u0149\u014B" +
		"\x05\"\x12\x02\u014A\u0148\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02" +
		"\u014C\u014A\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D+\x03\x02" +
		"\x02\x02\u014E\u014C\x03\x02\x02\x02\u014F\u0151\x07!\x02\x02\u0150\u014F" +
		"\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02" +
		"\u0152\u0153\x05&\x14\x02\u0153-\x03\x02\x02\x02\u0154\u0159\x05,\x17" +
		"\x02\u0155\u0156\x07\n\x02\x02\u0156\u0158\x05,\x17\x02\u0157\u0155\x03" +
		"\x02\x02\x02\u0158\u015B\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u0159" +
		"\u015A\x03\x02\x02\x02\u015A/\x03\x02\x02\x02\u015B\u0159\x03\x02\x02" +
		"\x02\u015C\u015D\x07\x16\x02\x02\u015D\u015E\x05(\x15\x02\u015E\u015F" +
		"\x07\x17\x02\x02\u015F\u0161\x03\x02\x02\x02\u0160\u015C\x03\x02\x02\x02" +
		"\u0160\u0161\x03\x02\x02\x02\u01611\x03\x02\x02\x02\u0162\u0163\x07\x16" +
		"\x02\x02\u0163\u0164\x05.\x18\x02\u0164\u0165\x07\x17\x02\x02\u0165\u0167" +
		"\x03\x02\x02\x02\u0166\u0162\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02" +
		"\u01673\x03\x02\x02\x02\u0168\u0169\x07\"\x02\x02\u0169\u016A\x056\x1C" +
		"\x02\u016A\u016D\x058\x1D\x02\u016B\u016C\x07\x1F\x02\x02\u016C\u016E" +
		"\x05\x1E\x10\x02\u016D\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02" +
		"\u016E\u0178\x03\x02\x02\x02\u016F\u0170\x07#\x02\x02\u0170\u0175\x05" +
		"\x80A\x02\u0171\u0172\x07\n\x02\x02\u0172\u0174\x05\x80A\x02\u0173\u0171" +
		"\x03\x02\x02\x02\u0174\u0177\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02" +
		"\u0175\u0176\x03\x02\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177\u0175\x03" +
		"\x02\x02\x02\u0178\u016F\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179" +
		"\u017F\x03\x02\x02\x02\u017A\u017B\x07\x06\x02\x02\u017B\u017C\x05<\x1F" +
		"\x02\u017C\u017D\x07\x07\x02\x02\u017D\u0180\x03\x02\x02\x02\u017E\u0180" +
		"\x07\t\x02\x02\u017F\u017A\x03\x02\x02\x02\u017F\u017E\x03\x02\x02\x02" +
		"\u01805\x03\x02\x02\x02\u0181\u0182\x07Y\x02\x02\u01827\x03\x02\x02\x02" +
		"\u0183\u0188\x05:\x1E\x02\u0184\u0185\x07\n\x02\x02\u0185\u0187\x05:\x1E" +
		"\x02\u0186\u0184\x03\x02\x02\x02\u0187\u018A\x03\x02\x02\x02\u0188\u0186" +
		"\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u01899\x03\x02\x02\x02\u018A" +
		"\u0188\x03\x02\x02\x02\u018B\u018C\x05x=\x02\u018C\u018D\x07\x1F\x02\x02" +
		"\u018D\u018E\x05\x1E\x10\x02\u018E;\x03\x02\x02\x02\u018F\u0191\x05\x06" +
		"\x04\x02\u0190\u018F\x03\x02\x02\x02\u0191\u0194\x03\x02\x02\x02\u0192" +
		"\u0190\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u019A\x03\x02" +
		"\x02\x02\u0194\u0192\x03\x02\x02\x02\u0195\u0196\x05> \x02\u0196\u0197" +
		"\x07\t\x02\x02\u0197\u0199\x03\x02\x02\x02\u0198\u0195\x03\x02\x02\x02" +
		"\u0199\u019C\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A\u019B\x03" +
		"\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019D" +
		"\u019F\x05B\"\x02\u019E\u019D\x03\x02\x02\x02\u019E\u019F\x03\x02\x02" +
		"\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A1\x07\x07\x02\x02\u01A1=\x03" +
		"\x02\x02\x02\u01A2\u01AE\x05B\"\x02\u01A3\u01A4\x07$\x02\x02\u01A4\u01A7" +
		"\x05^0\x02\u01A5\u01A6\x07\x1F\x02\x02\u01A6\u01A8\x05\x1E\x10\x02\u01A7" +
		"\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01AB\x03\x02" +
		"\x02\x02\u01A9\u01AA\x07\x12\x02\x02\u01AA\u01AC\x05B\"\x02\u01AB\u01A9" +
		"\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AE\x03\x02\x02\x02" +
		"\u01AD\u01A2\x03\x02\x02\x02\u01AD\u01A3\x03\x02\x02\x02\u01AE?\x03\x02" +
		"\x02\x02\u01AF\u020A\x07%\x02\x02\u01B0\u020A\x07&\x02\x02\u01B1\u01B6" +
		"\x07\'\x02\x02\u01B2\u01B3\x07\x16\x02\x02\u01B3\u01B4\x05 \x11\x02\u01B4" +
		"\u01B5\x07\x17\x02\x02\u01B5\u01B7\x03\x02\x02\x02\u01B6\u01B2\x03\x02" +
		"\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8" +
		"\u01B9\x07\x14\x02\x02\u01B9\u01BA\x05R*\x02\u01BA\u01BB\x07\x15\x02\x02" +
		"\u01BB\u020A\x03\x02\x02\x02\u01BC\u020A\x05h5\x02\u01BD\u01BE\x07\x10" +
		"\x02\x02\u01BE\u01BF\x05R*\x02\u01BF\u01C0\x07\x11\x02\x02\u01C0\u020A" +
		"\x03\x02\x02\x02\u01C1\u01C2\x07\x10\x02\x02\u01C2\u01C3\x05B\"\x02\u01C3" +
		"\u01C4\x07\x1F\x02\x02\u01C4\u01C5\x05\x1E\x10\x02\u01C5\u01C6\x07\x11" +
		"\x02\x02\u01C6\u020A\x03\x02\x02\x02\u01C7\u01C8\x07\x10\x02\x02\u01C8" +
		"\u01C9\x05B\"\x02\u01C9\u01CA\x07\v\x02\x02\u01CA\u01CB\x05\x1E\x10\x02" +
		"\u01CB\u01CC\x07\x11\x02\x02\u01CC\u020A\x03\x02\x02\x02\u01CD\u01CE\x07" +
		"\x06\x02\x02\u01CE\u020A\x05<\x1F\x02\u01CF\u01D0\x07(\x02\x02\u01D0\u01D1" +
		"\x07\x10\x02\x02\u01D1\u01D2\x05B\"\x02\u01D2\u01D3\x07\x11\x02\x02\u01D3" +
		"\u01D4\x05B\"\x02\u01D4\u01D5\x07)\x02\x02\u01D5\u01D6\x07\x06\x02\x02" +
		"\u01D6\u01D7\x05B\"\x02\u01D7\u01D8\x07\x07\x02\x02\u01D8\u020A\x03\x02" +
		"\x02\x02\u01D9\u01DA\x07(\x02\x02\u01DA\u01DB\x07\x10\x02\x02\u01DB\u01DC" +
		"\x05B\"\x02\u01DC\u01DD\x07\x11\x02\x02\u01DD\u01DE\x07\x06\x02\x02\u01DE" +
		"\u01DF\x05B\"\x02\u01DF\u01E0\x07\x07\x02\x02\u01E0\u020A\x03\x02\x02" +
		"\x02\u01E1\u01E2\x07(\x02\x02\u01E2\u01E3\x07\x10\x02\x02\u01E3\u01E4" +
		"\x05B\"\x02\u01E4\u01E5\x07\x11\x02\x02\u01E5\u01E8\x05B\"\x02\u01E6\u01E7" +
		"\x07)\x02\x02\u01E7\u01E9\x05B\"\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8" +
		"\u01E9\x03\x02\x02\x02\u01E9\u020A\x03\x02\x02\x02\u01EA\u01EB\x07*\x02" +
		"\x02\u01EB\u01EC\x07\x10\x02\x02\u01EC\u01ED\x05B\"\x02\u01ED\u01EE\x07" +
		"\x11\x02\x02\u01EE\u01EF\x07\x06\x02\x02\u01EF\u01F0\x05B\"\x02\u01F0" +
		"\u01F1\x07\x07\x02\x02\u01F1\u020A\x03\x02\x02\x02\u01F2\u01F3\x07+\x02" +
		"\x02\u01F3\u020A\x05B\"\x02\u01F4\u01F5\x07+\x02\x02\u01F5\u01F6\x07\x06" +
		"\x02\x02\u01F6\u01F7\x05B\"\x02\u01F7\u01F8\x07\x07\x02\x02\u01F8\u020A" +
		"\x03\x02\x02\x02\u01F9\u01FA\x07,\x02\x02\u01FA\u01FB\x07\x06\x02\x02" +
		"\u01FB\u01FC\x05B\"\x02\u01FC\u01FD\x07\x07\x02\x02\u01FD\u020A\x03\x02" +
		"\x02\x02\u01FE\u0200\x07,\x02\x02\u01FF\u0201\x05B\"\x02\u0200\u01FF\x03" +
		"\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u020A\x03\x02\x02\x02\u0202" +
		"\u0203\x07-\x02\x02\u0203\u0204\x07\x06\x02\x02\u0204\u0205\x05B\"\x02" +
		"\u0205\u0206\x07\x07\x02\x02\u0206\u020A\x03\x02\x02\x02\u0207\u0208\x07" +
		"-\x02\x02\u0208\u020A\x05B\"\x02\u0209\u01AF\x03\x02\x02\x02\u0209\u01B0" +
		"\x03\x02\x02\x02\u0209\u01B1\x03\x02\x02\x02\u0209\u01BC\x03\x02\x02\x02" +
		"\u0209\u01BD\x03\x02\x02\x02\u0209\u01C1\x03\x02\x02\x02\u0209\u01C7\x03" +
		"\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u0209\u01CD\x03\x02\x02\x02\u0209\u01CF\x03\x02\x02\x02\u0209" +
		"\u01D9\x03\x02\x02\x02\u0209\u01E1\x03\x02\x02\x02\u0209\u01EA\x03\x02" +
		"\x02\x02\u0209\u01F2\x03\x02\x02\x02\u0209\u01F4\x03\x02\x02\x02\u0209" +
		"\u01F9\x03\x02\x02\x02\u0209\u01FE\x03\x02\x02\x02\u0209\u0202\x03\x02" +
		"\x02\x02\u0209\u0207\x03\x02\x02\x02\u020AA\x03\x02\x02\x02\u020B\u020C" +
		"\x05`1\x02\u020C\u020D\x05B\"\x02\u020D\u0215\x03\x02\x02\x02\u020E\u0215" +
		"\x05L\'\x02\u020F\u0215\x05F$\x02\u0210\u0211\x05H%\x02\u0211\u0212\x07" +
		"\x12\x02\x02\u0212\u0213\x05B\"\x02\u0213\u0215\x03\x02\x02\x02\u0214" +
		"\u020B\x03\x02\x02\x02\u0214\u020E\x03\x02\x02\x02\u0214\u020F\x03\x02" +
		"\x02\x02\u0214\u0210\x03\x02\x02\x02\u0215C\x03\x02\x02\x02\u0216\u0217" +
		"\t\x04\x02\x02\u0217E\x03\x02\x02\x02\u0218\u021E\x05H%\x02\u0219\u021A" +
		"\x05D#\x02\u021A\u021B\x05H%\x02\u021B\u021D\x03\x02\x02\x02\u021C\u0219" +
		"\x03\x02\x02\x02\u021D\u0220\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02" +
		"\u021E\u021F\x03\x02\x02\x02\u021FG\x03\x02\x02\x02\u0220\u021E\x03\x02" +
		"\x02\x02\u0221\u0222\x07=\x02\x02\u0222\u022F\x05H%\x02\u0223\u0224\x07" +
		"\x19\x02\x02\u0224\u022F\x05H%\x02\u0225\u0226\x07\x18\x02\x02\u0226\u022F" +
		"\x05H%\x02\u0227\u0228\x07:\x02\x02\u0228\u022F\x05H%\x02\u0229\u022A" +
		"\x07>\x02\x02\u022A\u022F\x05x=\x02\u022B\u022C\x07\x1B\x02\x02\u022C" +
		"\u022F\x05x=\x02\u022D\u022F\x05J&\x02\u022E\u0221\x03\x02\x02\x02\u022E" +
		"\u0223\x03\x02\x02\x02\u022E\u0225\x03\x02\x02\x02\u022E\u0227\x03\x02" +
		"\x02\x02\u022E\u0229\x03\x02\x02\x02\u022E\u022B\x03\x02\x02\x02\u022E" +
		"\u022D\x03\x02\x02\x02\u022FI\x03\x02\x02\x02\u0230\u0235\x05@!\x02\u0231" +
		"\u0232\x07?\x02\x02\u0232\u0234\x07Y\x02\x02\u0233\u0231\x03\x02\x02\x02" +
		"\u0234\u0237\x03\x02\x02\x02\u0235\u0233\x03\x02\x02\x02\u0235\u0236\x03" +
		"\x02\x02\x02\u0236\u0243\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02\u0238" +
		"\u023F\x05@!\x02\u0239\u023A\x07\x14\x02\x02\u023A\u023B\x05B\"\x02\u023B" +
		"\u023C\x07\x15\x02\x02\u023C\u023E\x03\x02\x02\x02\u023D\u0239\x03\x02" +
		"\x02\x02\u023E\u0241\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u023F" +
		"\u0240\x03\x02\x02\x02\u0240\u0243\x03\x02\x02\x02\u0241\u023F\x03\x02" +
		"\x02\x02\u0242\u0230\x03\x02\x02\x02\u0242\u0238\x03\x02\x02\x02\u0243" +
		"K\x03\x02\x02\x02\u0244\u0245\t\x05\x02\x02\u0245\u0250\x05N(\x02\u0246" +
		"\u024A\x07\x06\x02\x02\u0247\u0249\x05B\"\x02\u0248\u0247\x03\x02\x02" +
		"\x02\u0249\u024C\x03\x02\x02\x02\u024A\u0248\x03\x02\x02\x02\u024A\u024B" +
		"\x03\x02\x02\x02\u024B\u024D\x03\x02\x02\x02\u024C\u024A\x03\x02\x02\x02" +
		"\u024D\u024F\x07\x07\x02\x02\u024E\u0246\x03\x02\x02\x02\u024F\u0252\x03" +
		"\x02\x02\x02\u0250\u024E\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251" +
		"\u0255\x03\x02\x02\x02\u0252\u0250\x03\x02\x02\x02\u0253\u0254\x07B\x02" +
		"\x02\u0254\u0256\x05B\"\x02\u0255\u0253\x03\x02\x02\x02\u0255\u0256\x03" +
		"\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\u0258\x07\x1F\x02\x02\u0258" +
		"\u0259\x05B\"\x02\u0259\u0264\x03\x02\x02\x02\u025A\u025B\x07C\x02\x02" +
		"\u025B\u025C\x07\x14\x02\x02\u025C\u025D\x07D\x02\x02\u025D\u025E\x07" +
		"\x15\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\u0260\x05P)\x02\u0260\u0261" +
		"\x07B\x02\x02\u0261\u0262\x05B\"\x02\u0262\u0264\x03\x02\x02\x02\u0263" +
		"\u0244\x03\x02\x02\x02\u0263\u025A\x03\x02\x02\x02\u0264M\x03\x02\x02" +
		"\x02\u0265\u026A\x05P)\x02\u0266\u0267\x07\n\x02\x02\u0267\u0269\x05P" +
		")\x02\u0268\u0266\x03\x02\x02\x02\u0269\u026C\x03\x02\x02\x02\u026A\u0268" +
		"\x03\x02\x02\x02\u026A\u026B\x03\x02\x02\x02\u026BO\x03\x02\x02\x02\u026C" +
		"\u026A\x03\x02\x02\x02\u026D\u026E\x07Y\x02\x02\u026E\u026F\x07\x1F\x02" +
		"\x02\u026F\u0274\x05\x1E\x10\x02\u0270\u0271\x07Y\x02\x02\u0271\u0272" +
		"\x07E\x02\x02\u0272\u0274\x05B\"\x02\u0273\u026D\x03\x02\x02\x02\u0273" +
		"\u0270\x03\x02\x02\x02\u0274Q\x03\x02\x02\x02\u0275\u027A\x05B\"\x02\u0276" +
		"\u0277\x07\n\x02\x02\u0277\u0279\x05B\"\x02\u0278\u0276\x03\x02\x02\x02" +
		"\u0279\u027C\x03\x02\x02\x02\u027A\u0278\x03\x02\x02\x02\u027A\u027B\x03" +
		"\x02\x02\x02\u027BS\x03\x02\x02\x02\u027C\u027A\x03\x02\x02\x02\u027D" +
		"\u0283\x05z>\x02\u027E\u027F\x07\x16\x02\x02\u027F\u0280\x07\x1F\x02\x02" +
		"\u0280\u0281\x05B\"\x02\u0281\u0282\x07\x17\x02\x02\u0282\u0284\x03\x02" +
		"\x02\x02\u0283\u027E\x03\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284" +
		"U\x03\x02\x02\x02\u0285\u028B\x05z>\x02\u0286\u0287\x07\x16\x02\x02\u0287" +
		"\u0288\x07\x1F\x02\x02\u0288\u0289\x05Z.\x02\u0289\u028A\x07\x17\x02\x02" +
		"\u028A\u028C\x03\x02\x02\x02\u028B\u0286\x03\x02\x02\x02\u028B\u028C\x03" +
		"\x02\x02\x02\u028CW\x03\x02\x02\x02\u028D\u0292\x05V,\x02\u028E\u028F" +
		"\x07\n\x02\x02\u028F\u0291\x05V,\x02\u0290\u028E\x03\x02\x02\x02\u0291" +
		"\u0294\x03\x02\x02\x02\u0292\u0290\x03\x02\x02\x02\u0292\u0293\x03\x02" +
		"\x02\x02\u0293Y\x03\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0295\u029D" +
		"\x05x=\x02\u0296\u0297\x05\x80A\x02\u0297\u0298\x05$\x13\x02\u0298\u0299" +
		"\x07\x06\x02\x02\u0299\u029A\x05X-\x02\u029A\u029B\x07\x07\x02\x02\u029B" +
		"\u029D\x03\x02\x02\x02\u029C\u0295\x03\x02\x02\x02\u029C\u0296\x03\x02" +
		"\x02\x02\u029D[\x03\x02\x02\x02\u029E\u02A3\x05Z.\x02\u029F\u02A0\x07" +
		"\n\x02\x02\u02A0\u02A2\x05Z.\x02\u02A1\u029F\x03\x02\x02\x02\u02A2\u02A5" +
		"\x03\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02" +
		"\u02A4]\x03\x02\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A6\u02AC\x05Z." +
		"\x02\u02A7\u02A8\x07\x10\x02\x02\u02A8\u02A9\x05\\/\x02\u02A9\u02AA\x07" +
		"\x11\x02\x02\u02AA\u02AC\x03\x02\x02\x02\u02AB\u02A6\x03\x02\x02\x02\u02AB" +
		"\u02A7\x03\x02\x02\x02\u02AC_\x03\x02\x02\x02\u02AD\u02AE\x07\x1A\x02" +
		"\x02\u02AE\u02AF\x05\\/\x02\u02AF\u02B0\x07\x1A\x02\x02\u02B0a\x03\x02" +
		"\x02\x02\u02B1\u02B3\x07X\x02\x02\u02B2\u02B1\x03\x02\x02\x02\u02B3\u02B4" +
		"\x03\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02" +
		"\u02B5c\x03\x02\x02\x02\u02B6\u02B7\x05b2\x02\u02B7\u02B8\t\x06\x02\x02" +
		"\u02B8e\x03\x02\x02\x02\u02B9\u02BD\t\x07\x02\x02\u02BA\u02BC\x07W\x02" +
		"\x02\u02BB\u02BA\x03\x02\x02\x02\u02BC\u02BF\x03\x02\x02\x02\u02BD\u02BB" +
		"\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02C0\x03\x02\x02\x02" +
		"\u02BF\u02BD\x03\x02\x02\x02\u02C0\u02C1\x07K\x02\x02\u02C1g\x03\x02\x02" +
		"\x02\u02C2\u02C3\x07L\x02\x02\u02C3\u02CA\x05v<\x02\u02C4\u02CA\x07M\x02" +
		"\x02\u02C5\u02CA\x07N\x02\x02\u02C6\u02CA\x05b2\x02\u02C7\u02CA\x05d3" +
		"\x02\u02C8\u02CA\x05f4\x02\u02C9\u02C2\x03\x02\x02\x02\u02C9\u02C4\x03" +
		"\x02\x02\x02\u02C9\u02C5\x03\x02\x02\x02\u02C9\u02C6\x03\x02\x02\x02\u02C9" +
		"\u02C7\x03\x02\x02\x02\u02C9\u02C8\x03\x02\x02\x02\u02CAi\x03\x02\x02" +
		"\x02\u02CB\u02CC\x07O\x02\x02\u02CC\u02CD\x07Y\x02\x02\u02CD\u02CE\x07" +
		"\x1F\x02\x02\u02CE\u02CF\x05\x1E\x10\x02\u02CF\u02D0\x07\x12\x02\x02\u02D0" +
		"\u02D1\x05B\"\x02\u02D1\u02D2\x07\t\x02\x02\u02D2k\x03\x02\x02\x02\u02D3" +
		"\u02D4\x07P\x02\x02\u02D4\u02DD\x05n8\x02\u02D5\u02D6\x07Q\x02\x02\u02D6" +
		"\u02D9\x05\"\x12\x02\u02D7\u02D8\x07\n\x02\x02\u02D8\u02DA\x05\"\x12\x02" +
		"\u02D9\u02D7\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02D9\x03" +
		"\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DE\x03\x02\x02\x02\u02DD" +
		"\u02D5\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02E4\x03\x02" +
		"\x02\x02\u02DF\u02E0\x07\x06\x02\x02\u02E0\u02E1\x05r:\x02\u02E1\u02E2" +
		"\x07\x07\x02\x02\u02E2\u02E5\x03\x02\x02\x02\u02E3\u02E5\x07\t\x02\x02" +
		"\u02E4\u02DF\x03\x02\x02\x02\u02E4\u02E3\x03\x02\x02\x02\u02E5m\x03\x02" +
		"\x02\x02\u02E6\u02E7\x07Y\x02\x02\u02E7\u02E8\x050\x19\x02\u02E8o\x03" +
		"\x02\x02\x02\u02E9\u02EE\x05r:\x02\u02EA\u02EB\x07\n\x02\x02\u02EB\u02ED" +
		"\x05r:\x02\u02EC\u02EA\x03\x02\x02\x02\u02ED\u02F0\x03\x02\x02\x02\u02EE" +
		"\u02EC\x03\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EFq\x03\x02\x02" +
		"\x02\u02F0\u02EE\x03\x02\x02\x02\u02F1\u02F2\x05t;\x02\u02F2\u02F3\x05" +
		"z>\x02\u02F3\u02F4\x07\x1F\x02\x02\u02F4\u02F5\x05\x1E\x10\x02\u02F5s" +
		"\x03\x02\x02\x02\u02F6\u02FA\x07R\x02\x02\u02F7\u02F9\v\x02\x02\x02\u02F8" +
		"\u02F7\x03\x02\x02\x02\u02F9\u02FC\x03\x02\x02\x02\u02FA\u02FB\x03\x02" +
		"\x02\x02\u02FA\u02F8\x03\x02\x02\x02\u02FB\u02FD\x03\x02\x02\x02\u02FC" +
		"\u02FA\x03\x02\x02\x02\u02FD\u030D\x07S\x02\x02\u02FE\u0302\x07T\x02\x02" +
		"\u02FF\u0301\v\x02\x02\x02\u0300\u02FF\x03\x02\x02\x02\u0301\u0304\x03" +
		"\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0302\u0300\x03\x02\x02\x02\u0303" +
		"\u030D\x03\x02\x02\x02\u0304\u0302\x03\x02\x02\x02\u0305\u0309\x07U\x02" +
		"\x02\u0306\u0308\v\x02\x02\x02\u0307\u0306\x03\x02\x02\x02\u0308\u030B" +
		"\x03\x02\x02\x02\u0309\u030A\x03\x02\x02\x02\u0309\u0307\x03\x02\x02\x02" +
		"\u030A\u030D\x03\x02\x02\x02\u030B\u0309\x03\x02\x02\x02\u030C\u02F6\x03" +
		"\x02\x02\x02\u030C\u02FE\x03\x02\x02\x02\u030C\u0305\x03\x02\x02\x02\u030D" +
		"u\x03\x02\x02\x02\u030E\u030F\t\b\x02\x02\u030Fw\x03\x02\x02\x02\u0310" +
		"\u0311\x07Y\x02\x02\u0311y\x03\x02\x02\x02\u0312\u0313\x07Y\x02\x02\u0313" +
		"{\x03\x02\x02\x02\u0314\u0315\x05v<\x02\u0315\u0316\x07\x05\x02\x02\u0316" +
		"\u0317\x05~@\x02\u0317}\x03\x02\x02\x02\u0318\u0319\x07Y\x02\x02\u0319" +
		"\x7F\x03\x02\x02\x02\u031A\u0321\x05v<\x02\u031B\u031C\x07\x05\x02\x02" +
		"\u031C\u031F\x07Y\x02\x02\u031D\u031E\x07\x05\x02\x02\u031E\u0320\x07" +
		"Y\x02\x02\u031F\u031D\x03\x02\x02\x02\u031F\u0320\x03\x02\x02\x02\u0320" +
		"\u0322\x03\x02\x02\x02\u0321\u031B\x03\x02\x02\x02\u0321\u0322\x03\x02" +
		"\x02\x02\u0322\x81\x03\x02\x02\x02\u0323\u0324\x07V\x02\x02\u0324\u0325" +
		"\x05v<\x02\u0325\u032B\x07\x06\x02\x02\u0326\u0327\x05\x1C\x0F\x02\u0327" +
		"\u0328\x05\x04\x03\x02\u0328\u032A\x03\x02\x02\x02\u0329\u0326\x03\x02" +
		"\x02\x02\u032A\u032D\x03\x02\x02\x02\u032B\u0329\x03\x02\x02\x02\u032B" +
		"\u032C\x03\x02\x02\x02\u032C\u032E\x03\x02\x02\x02\u032D\u032B\x03\x02" +
		"\x02\x02\u032E\u032F\x07\x07\x02\x02\u032F\x83\x03\x02\x02\x02N\x87\x89" +
		"\x91\x9E\xA0\xA2\xBA\xBF\xC6\xCF\xD7\xE7\xEC\xF3\xF7\u0102\u0109\u0113" +
		"\u011B\u012A\u0131\u013C\u0143\u014C\u0150\u0159\u0160\u0166\u016D\u0175" +
		"\u0178\u017F\u0188\u0192\u019A\u019E\u01A7\u01AB\u01AD\u01B6\u01E8\u0200" +
		"\u0209\u0214\u021E\u022E\u0235\u023F\u0242\u024A\u0250\u0255\u0263\u026A" +
		"\u0273\u027A\u0283\u028B\u0292\u029C\u02A3\u02AB\u02B4\u02BD\u02C9\u02DB" +
		"\u02DD\u02E4\u02EE\u02FA\u0302\u0309\u030C\u031F\u0321\u032B";
	public static readonly _serializedATN: string = Utils.join(
		[
			MoveParser._serializedATNSegment0,
			MoveParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MoveParser.__ATN) {
			MoveParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MoveParser._serializedATN));
		}

		return MoveParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public addressBlock(): AddressBlockContext[];
	public addressBlock(i: number): AddressBlockContext;
	public addressBlock(i?: number): AddressBlockContext | AddressBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AddressBlockContext);
		} else {
			return this.getRuleContext(i, AddressBlockContext);
		}
	}
	public module(): ModuleContext[];
	public module(i: number): ModuleContext;
	public module(i?: number): ModuleContext | ModuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleContext);
		} else {
			return this.getRuleContext(i, ModuleContext);
		}
	}
	public script(): ScriptContext[];
	public script(i: number): ScriptContext;
	public script(i?: number): ScriptContext | ScriptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScriptContext);
		} else {
			return this.getRuleContext(i, ScriptContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_file; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleContext extends ParserRuleContext {
	public docComments(): DocCommentsContext[];
	public docComments(i: number): DocCommentsContext;
	public docComments(i?: number): DocCommentsContext | DocCommentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DocCommentsContext);
		} else {
			return this.getRuleContext(i, DocCommentsContext);
		}
	}
	public moduleName(): ModuleNameContext {
		return this.getRuleContext(0, ModuleNameContext);
	}
	public attributes(): AttributesContext {
		return this.getRuleContext(0, AttributesContext);
	}
	public useDecl(): UseDeclContext | undefined {
		return this.tryGetRuleContext(0, UseDeclContext);
	}
	public friendDecl(): FriendDeclContext | undefined {
		return this.tryGetRuleContext(0, FriendDeclContext);
	}
	public leadingNameAccess(): LeadingNameAccessContext | undefined {
		return this.tryGetRuleContext(0, LeadingNameAccessContext);
	}
	public moduleMemberModifiers(): ModuleMemberModifiersContext | undefined {
		return this.tryGetRuleContext(0, ModuleMemberModifiersContext);
	}
	public constantDecl(): ConstantDeclContext | undefined {
		return this.tryGetRuleContext(0, ConstantDeclContext);
	}
	public structDecl(): StructDeclContext | undefined {
		return this.tryGetRuleContext(0, StructDeclContext);
	}
	public functionDecl(): FunctionDeclContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_module; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterModule) {
			listener.enterModule(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitModule) {
			listener.exitModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitModule) {
			return visitor.visitModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseDeclContext extends ParserRuleContext {
	public moduleIdent(): ModuleIdentContext {
		return this.getRuleContext(0, ModuleIdentContext);
	}
	public useAlias(): UseAliasContext | undefined {
		return this.tryGetRuleContext(0, UseAliasContext);
	}
	public useMember(): UseMemberContext[];
	public useMember(i: number): UseMemberContext;
	public useMember(i?: number): UseMemberContext | UseMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UseMemberContext);
		} else {
			return this.getRuleContext(i, UseMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_useDecl; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterUseDecl) {
			listener.enterUseDecl(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitUseDecl) {
			listener.exitUseDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitUseDecl) {
			return visitor.visitUseDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseMemberContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(MoveParser.Identifier, 0); }
	public useAlias(): UseAliasContext {
		return this.getRuleContext(0, UseAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_useMember; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterUseMember) {
			listener.enterUseMember(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitUseMember) {
			listener.exitUseMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitUseMember) {
			return visitor.visitUseMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseAliasContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(MoveParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_useAlias; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterUseAlias) {
			listener.enterUseAlias(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitUseAlias) {
			listener.exitUseAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitUseAlias) {
			return visitor.visitUseAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScriptContext extends ParserRuleContext {
	public attributes(): AttributesContext[];
	public attributes(i: number): AttributesContext;
	public attributes(i?: number): AttributesContext | AttributesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributesContext);
		} else {
			return this.getRuleContext(i, AttributesContext);
		}
	}
	public docComments(): DocCommentsContext {
		return this.getRuleContext(0, DocCommentsContext);
	}
	public moduleMemberModifiers(): ModuleMemberModifiersContext {
		return this.getRuleContext(0, ModuleMemberModifiersContext);
	}
	public functionDecl(): FunctionDeclContext {
		return this.getRuleContext(0, FunctionDeclContext);
	}
	public useDecl(): UseDeclContext[];
	public useDecl(i: number): UseDeclContext;
	public useDecl(i?: number): UseDeclContext | UseDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UseDeclContext);
		} else {
			return this.getRuleContext(i, UseDeclContext);
		}
	}
	public constantDecl(): ConstantDeclContext[];
	public constantDecl(i: number): ConstantDeclContext;
	public constantDecl(i?: number): ConstantDeclContext | ConstantDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantDeclContext);
		} else {
			return this.getRuleContext(i, ConstantDeclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_script; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterScript) {
			listener.enterScript(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitScript) {
			listener.exitScript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitScript) {
			return visitor.visitScript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FriendDeclContext extends ParserRuleContext {
	public nameAccessChain(): NameAccessChainContext {
		return this.getRuleContext(0, NameAccessChainContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_friendDecl; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterFriendDecl) {
			listener.enterFriendDecl(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitFriendDecl) {
			listener.exitFriendDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitFriendDecl) {
			return visitor.visitFriendDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleMemberModifiersContext extends ParserRuleContext {
	public moduleMemberModifier(): ModuleMemberModifierContext[];
	public moduleMemberModifier(i: number): ModuleMemberModifierContext;
	public moduleMemberModifier(i?: number): ModuleMemberModifierContext | ModuleMemberModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleMemberModifierContext);
		} else {
			return this.getRuleContext(i, ModuleMemberModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_moduleMemberModifiers; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterModuleMemberModifiers) {
			listener.enterModuleMemberModifiers(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitModuleMemberModifiers) {
			listener.exitModuleMemberModifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitModuleMemberModifiers) {
			return visitor.visitModuleMemberModifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleMemberModifierContext extends ParserRuleContext {
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_moduleMemberModifier; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterModuleMemberModifier) {
			listener.enterModuleMemberModifier(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitModuleMemberModifier) {
			listener.exitModuleMemberModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitModuleMemberModifier) {
			return visitor.visitModuleMemberModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VisibilityContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_visibility; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterVisibility) {
			listener.enterVisibility(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitVisibility) {
			listener.exitVisibility(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitVisibility) {
			return visitor.visitVisibility(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeValueContext extends ParserRuleContext {
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public nameAccessChain(): NameAccessChainContext | undefined {
		return this.tryGetRuleContext(0, NameAccessChainContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_attributeValue; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterAttributeValue) {
			listener.enterAttributeValue(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitAttributeValue) {
			listener.exitAttributeValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitAttributeValue) {
			return visitor.visitAttributeValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(MoveParser.Identifier, 0); }
	public attributeValue(): AttributeValueContext | undefined {
		return this.tryGetRuleContext(0, AttributeValueContext);
	}
	public commaAttribute(): CommaAttributeContext | undefined {
		return this.tryGetRuleContext(0, CommaAttributeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_attribute; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommaAttributeContext extends ParserRuleContext {
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_commaAttribute; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterCommaAttribute) {
			listener.enterCommaAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitCommaAttribute) {
			listener.exitCommaAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitCommaAttribute) {
			return visitor.visitCommaAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributesContext extends ParserRuleContext {
	public commaAttribute(): CommaAttributeContext[];
	public commaAttribute(i: number): CommaAttributeContext;
	public commaAttribute(i?: number): CommaAttributeContext | CommaAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommaAttributeContext);
		} else {
			return this.getRuleContext(i, CommaAttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_attributes; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterAttributes) {
			listener.enterAttributes(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitAttributes) {
			listener.exitAttributes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitAttributes) {
			return visitor.visitAttributes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public nameAccessChain(): NameAccessChainContext | undefined {
		return this.tryGetRuleContext(0, NameAccessChainContext);
	}
	public types(): TypesContext | undefined {
		return this.tryGetRuleContext(0, TypesContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_type; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypesContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_types; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterTypes) {
			listener.enterTypes(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitTypes) {
			listener.exitTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitTypes) {
			return visitor.visitTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AbilityContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_ability; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterAbility) {
			listener.enterAbility(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitAbility) {
			listener.exitAbility(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitAbility) {
			return visitor.visitAbility(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalTypeArgsContext extends ParserRuleContext {
	public types(): TypesContext {
		return this.getRuleContext(0, TypesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_optionalTypeArgs; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterOptionalTypeArgs) {
			listener.enterOptionalTypeArgs(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitOptionalTypeArgs) {
			listener.exitOptionalTypeArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitOptionalTypeArgs) {
			return visitor.visitOptionalTypeArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(MoveParser.Identifier, 0); }
	public constraint(): ConstraintContext | undefined {
		return this.tryGetRuleContext(0, ConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstraintContext extends ParserRuleContext {
	public ability(): AbilityContext[];
	public ability(i: number): AbilityContext;
	public ability(i?: number): AbilityContext | AbilityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AbilityContext);
		} else {
			return this.getRuleContext(i, AbilityContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_constraint; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterConstraint) {
			listener.enterConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitConstraint) {
			listener.exitConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitConstraint) {
			return visitor.visitConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterWithPhantomDeclContext extends ParserRuleContext {
	public typeParameter(): TypeParameterContext {
		return this.getRuleContext(0, TypeParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_typeParameterWithPhantomDecl; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterTypeParameterWithPhantomDecl) {
			listener.enterTypeParameterWithPhantomDecl(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitTypeParameterWithPhantomDecl) {
			listener.exitTypeParameterWithPhantomDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitTypeParameterWithPhantomDecl) {
			return visitor.visitTypeParameterWithPhantomDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterWithPhantomDeclsContext extends ParserRuleContext {
	public typeParameterWithPhantomDecl(): TypeParameterWithPhantomDeclContext[];
	public typeParameterWithPhantomDecl(i: number): TypeParameterWithPhantomDeclContext;
	public typeParameterWithPhantomDecl(i?: number): TypeParameterWithPhantomDeclContext | TypeParameterWithPhantomDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterWithPhantomDeclContext);
		} else {
			return this.getRuleContext(i, TypeParameterWithPhantomDeclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_typeParameterWithPhantomDecls; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterTypeParameterWithPhantomDecls) {
			listener.enterTypeParameterWithPhantomDecls(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitTypeParameterWithPhantomDecls) {
			listener.exitTypeParameterWithPhantomDecls(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitTypeParameterWithPhantomDecls) {
			return visitor.visitTypeParameterWithPhantomDecls(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalTypeParametersContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_optionalTypeParameters; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterOptionalTypeParameters) {
			listener.enterOptionalTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitOptionalTypeParameters) {
			listener.exitOptionalTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitOptionalTypeParameters) {
			return visitor.visitOptionalTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructTypeParameterContext extends ParserRuleContext {
	public typeParameterWithPhantomDecls(): TypeParameterWithPhantomDeclsContext | undefined {
		return this.tryGetRuleContext(0, TypeParameterWithPhantomDeclsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_structTypeParameter; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterStructTypeParameter) {
			listener.enterStructTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitStructTypeParameter) {
			listener.exitStructTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitStructTypeParameter) {
			return visitor.visitStructTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclContext extends ParserRuleContext {
	public functionDefName(): FunctionDefNameContext {
		return this.getRuleContext(0, FunctionDefNameContext);
	}
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public sequence(): SequenceContext | undefined {
		return this.tryGetRuleContext(0, SequenceContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public nameAccessChain(): NameAccessChainContext[];
	public nameAccessChain(i: number): NameAccessChainContext;
	public nameAccessChain(i?: number): NameAccessChainContext | NameAccessChainContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameAccessChainContext);
		} else {
			return this.getRuleContext(i, NameAccessChainContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_functionDecl; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterFunctionDecl) {
			listener.enterFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitFunctionDecl) {
			listener.exitFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(MoveParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_functionDefName; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterFunctionDefName) {
			listener.enterFunctionDefName(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitFunctionDefName) {
			listener.exitFunctionDefName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitFunctionDefName) {
			return visitor.visitFunctionDefName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_parameters; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public var(): VarContext {
		return this.getRuleContext(0, VarContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_parameter; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SequenceContext extends ParserRuleContext {
	public useDecl(): UseDeclContext[];
	public useDecl(i: number): UseDeclContext;
	public useDecl(i?: number): UseDeclContext | UseDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UseDeclContext);
		} else {
			return this.getRuleContext(i, UseDeclContext);
		}
	}
	public sequenceItem(): SequenceItemContext[];
	public sequenceItem(i: number): SequenceItemContext;
	public sequenceItem(i?: number): SequenceItemContext | SequenceItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SequenceItemContext);
		} else {
			return this.getRuleContext(i, SequenceItemContext);
		}
	}
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_sequence; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterSequence) {
			listener.enterSequence(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitSequence) {
			listener.exitSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitSequence) {
			return visitor.visitSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SequenceItemContext extends ParserRuleContext {
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	public bindList(): BindListContext | undefined {
		return this.tryGetRuleContext(0, BindListContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_sequenceItem; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterSequenceItem) {
			listener.enterSequenceItem(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitSequenceItem) {
			listener.exitSequenceItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitSequenceItem) {
			return visitor.visitSequenceItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public exps(): ExpsContext | undefined {
		return this.tryGetRuleContext(0, ExpsContext);
	}
	public types(): TypesContext | undefined {
		return this.tryGetRuleContext(0, TypesContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public sequence(): SequenceContext | undefined {
		return this.tryGetRuleContext(0, SequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_term; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpContext extends ParserRuleContext {
	public lambdaBindList(): LambdaBindListContext | undefined {
		return this.tryGetRuleContext(0, LambdaBindListContext);
	}
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	public quantifier(): QuantifierContext | undefined {
		return this.tryGetRuleContext(0, QuantifierContext);
	}
	public binOpExp(): BinOpExpContext | undefined {
		return this.tryGetRuleContext(0, BinOpExpContext);
	}
	public unaryExp(): UnaryExpContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_exp; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterExp) {
			listener.enterExp(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitExp) {
			listener.exitExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitExp) {
			return visitor.visitExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_binOp; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterBinOp) {
			listener.enterBinOp(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitBinOp) {
			listener.exitBinOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitBinOp) {
			return visitor.visitBinOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinOpExpContext extends ParserRuleContext {
	public unaryExp(): UnaryExpContext[];
	public unaryExp(i: number): UnaryExpContext;
	public unaryExp(i?: number): UnaryExpContext | UnaryExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnaryExpContext);
		} else {
			return this.getRuleContext(i, UnaryExpContext);
		}
	}
	public binOp(): BinOpContext[];
	public binOp(i: number): BinOpContext;
	public binOp(i?: number): BinOpContext | BinOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BinOpContext);
		} else {
			return this.getRuleContext(i, BinOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_binOpExp; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterBinOpExp) {
			listener.enterBinOpExp(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitBinOpExp) {
			listener.exitBinOpExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitBinOpExp) {
			return visitor.visitBinOpExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpContext extends ParserRuleContext {
	public unaryExp(): UnaryExpContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpContext);
	}
	public var(): VarContext | undefined {
		return this.tryGetRuleContext(0, VarContext);
	}
	public dotOrIndexChain(): DotOrIndexChainContext | undefined {
		return this.tryGetRuleContext(0, DotOrIndexChainContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_unaryExp; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterUnaryExp) {
			listener.enterUnaryExp(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitUnaryExp) {
			listener.exitUnaryExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitUnaryExp) {
			return visitor.visitUnaryExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DotOrIndexChainContext extends ParserRuleContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MoveParser.Identifier);
		} else {
			return this.getToken(MoveParser.Identifier, i);
		}
	}
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_dotOrIndexChain; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterDotOrIndexChain) {
			listener.enterDotOrIndexChain(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitDotOrIndexChain) {
			listener.exitDotOrIndexChain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitDotOrIndexChain) {
			return visitor.visitDotOrIndexChain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantifierContext extends ParserRuleContext {
	public quantifierBindings(): QuantifierBindingsContext | undefined {
		return this.tryGetRuleContext(0, QuantifierBindingsContext);
	}
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public quantifierBind(): QuantifierBindContext | undefined {
		return this.tryGetRuleContext(0, QuantifierBindContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_quantifier; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterQuantifier) {
			listener.enterQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitQuantifier) {
			listener.exitQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitQuantifier) {
			return visitor.visitQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantifierBindingsContext extends ParserRuleContext {
	public quantifierBind(): QuantifierBindContext[];
	public quantifierBind(i: number): QuantifierBindContext;
	public quantifierBind(i?: number): QuantifierBindContext | QuantifierBindContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QuantifierBindContext);
		} else {
			return this.getRuleContext(i, QuantifierBindContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_quantifierBindings; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterQuantifierBindings) {
			listener.enterQuantifierBindings(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitQuantifierBindings) {
			listener.exitQuantifierBindings(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitQuantifierBindings) {
			return visitor.visitQuantifierBindings(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantifierBindContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(MoveParser.Identifier, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_quantifierBind; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterQuantifierBind) {
			listener.enterQuantifierBind(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitQuantifierBind) {
			listener.exitQuantifierBind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitQuantifierBind) {
			return visitor.visitQuantifierBind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpsContext extends ParserRuleContext {
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_exps; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterExps) {
			listener.enterExps(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitExps) {
			listener.exitExps(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitExps) {
			return visitor.visitExps(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpFieldContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_expField; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterExpField) {
			listener.enterExpField(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitExpField) {
			listener.exitExpField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitExpField) {
			return visitor.visitExpField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BindFieldContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public bind(): BindContext | undefined {
		return this.tryGetRuleContext(0, BindContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_bindField; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterBindField) {
			listener.enterBindField(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitBindField) {
			listener.exitBindField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitBindField) {
			return visitor.visitBindField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BindFieldsContext extends ParserRuleContext {
	public bindField(): BindFieldContext[];
	public bindField(i: number): BindFieldContext;
	public bindField(i?: number): BindFieldContext | BindFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BindFieldContext);
		} else {
			return this.getRuleContext(i, BindFieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_bindFields; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterBindFields) {
			listener.enterBindFields(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitBindFields) {
			listener.exitBindFields(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitBindFields) {
			return visitor.visitBindFields(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BindContext extends ParserRuleContext {
	public var(): VarContext | undefined {
		return this.tryGetRuleContext(0, VarContext);
	}
	public nameAccessChain(): NameAccessChainContext | undefined {
		return this.tryGetRuleContext(0, NameAccessChainContext);
	}
	public optionalTypeArgs(): OptionalTypeArgsContext | undefined {
		return this.tryGetRuleContext(0, OptionalTypeArgsContext);
	}
	public bindFields(): BindFieldsContext | undefined {
		return this.tryGetRuleContext(0, BindFieldsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_bind; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterBind) {
			listener.enterBind(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitBind) {
			listener.exitBind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitBind) {
			return visitor.visitBind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BindsContext extends ParserRuleContext {
	public bind(): BindContext[];
	public bind(i: number): BindContext;
	public bind(i?: number): BindContext | BindContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BindContext);
		} else {
			return this.getRuleContext(i, BindContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_binds; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterBinds) {
			listener.enterBinds(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitBinds) {
			listener.exitBinds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitBinds) {
			return visitor.visitBinds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BindListContext extends ParserRuleContext {
	public bind(): BindContext | undefined {
		return this.tryGetRuleContext(0, BindContext);
	}
	public binds(): BindsContext | undefined {
		return this.tryGetRuleContext(0, BindsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_bindList; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterBindList) {
			listener.enterBindList(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitBindList) {
			listener.exitBindList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitBindList) {
			return visitor.visitBindList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaBindListContext extends ParserRuleContext {
	public binds(): BindsContext {
		return this.getRuleContext(0, BindsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_lambdaBindList; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterLambdaBindList) {
			listener.enterLambdaBindList(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitLambdaBindList) {
			listener.exitLambdaBindList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitLambdaBindList) {
			return visitor.visitLambdaBindList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public Digit(): TerminalNode[];
	public Digit(i: number): TerminalNode;
	public Digit(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MoveParser.Digit);
		} else {
			return this.getToken(MoveParser.Digit, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_number; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberTypedContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_numberTyped; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterNumberTyped) {
			listener.enterNumberTyped(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitNumberTyped) {
			listener.exitNumberTyped(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitNumberTyped) {
			return visitor.visitNumberTyped(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ByteStringContext extends ParserRuleContext {
	public Alphanumeric(): TerminalNode[];
	public Alphanumeric(i: number): TerminalNode;
	public Alphanumeric(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MoveParser.Alphanumeric);
		} else {
			return this.getToken(MoveParser.Alphanumeric, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_byteString; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterByteString) {
			listener.enterByteString(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitByteString) {
			listener.exitByteString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitByteString) {
			return visitor.visitByteString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public leadingNameAccess(): LeadingNameAccessContext | undefined {
		return this.tryGetRuleContext(0, LeadingNameAccessContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public numberTyped(): NumberTypedContext | undefined {
		return this.tryGetRuleContext(0, NumberTypedContext);
	}
	public byteString(): ByteStringContext | undefined {
		return this.tryGetRuleContext(0, ByteStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_value; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(MoveParser.Identifier, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_constantDecl; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterConstantDecl) {
			listener.enterConstantDecl(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitConstantDecl) {
			listener.exitConstantDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitConstantDecl) {
			return visitor.visitConstantDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDeclContext extends ParserRuleContext {
	public structDefName(): StructDefNameContext {
		return this.getRuleContext(0, StructDefNameContext);
	}
	public fieldAnnot(): FieldAnnotContext | undefined {
		return this.tryGetRuleContext(0, FieldAnnotContext);
	}
	public ability(): AbilityContext[];
	public ability(i: number): AbilityContext;
	public ability(i?: number): AbilityContext | AbilityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AbilityContext);
		} else {
			return this.getRuleContext(i, AbilityContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_structDecl; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterStructDecl) {
			listener.enterStructDecl(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitStructDecl) {
			listener.exitStructDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitStructDecl) {
			return visitor.visitStructDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDefNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(MoveParser.Identifier, 0); }
	public optionalTypeParameters(): OptionalTypeParametersContext {
		return this.getRuleContext(0, OptionalTypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_structDefName; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterStructDefName) {
			listener.enterStructDefName(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitStructDefName) {
			listener.exitStructDefName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitStructDefName) {
			return visitor.visitStructDefName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAnnotsContext extends ParserRuleContext {
	public fieldAnnot(): FieldAnnotContext[];
	public fieldAnnot(i: number): FieldAnnotContext;
	public fieldAnnot(i?: number): FieldAnnotContext | FieldAnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldAnnotContext);
		} else {
			return this.getRuleContext(i, FieldAnnotContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_fieldAnnots; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterFieldAnnots) {
			listener.enterFieldAnnots(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitFieldAnnots) {
			listener.exitFieldAnnots(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitFieldAnnots) {
			return visitor.visitFieldAnnots(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAnnotContext extends ParserRuleContext {
	public docComments(): DocCommentsContext {
		return this.getRuleContext(0, DocCommentsContext);
	}
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_fieldAnnot; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterFieldAnnot) {
			listener.enterFieldAnnot(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitFieldAnnot) {
			listener.exitFieldAnnot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitFieldAnnot) {
			return visitor.visitFieldAnnot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DocCommentsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_docComments; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterDocComments) {
			listener.enterDocComments(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitDocComments) {
			listener.exitDocComments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitDocComments) {
			return visitor.visitDocComments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LeadingNameAccessContext extends ParserRuleContext {
	public NumericalAddress(): TerminalNode | undefined { return this.tryGetToken(MoveParser.NumericalAddress, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(MoveParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_leadingNameAccess; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterLeadingNameAccess) {
			listener.enterLeadingNameAccess(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitLeadingNameAccess) {
			listener.exitLeadingNameAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitLeadingNameAccess) {
			return visitor.visitLeadingNameAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(MoveParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_var; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterVar) {
			listener.enterVar(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitVar) {
			listener.exitVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitVar) {
			return visitor.visitVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(MoveParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_field; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleIdentContext extends ParserRuleContext {
	public leadingNameAccess(): LeadingNameAccessContext {
		return this.getRuleContext(0, LeadingNameAccessContext);
	}
	public moduleName(): ModuleNameContext {
		return this.getRuleContext(0, ModuleNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_moduleIdent; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterModuleIdent) {
			listener.enterModuleIdent(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitModuleIdent) {
			listener.exitModuleIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitModuleIdent) {
			return visitor.visitModuleIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(MoveParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_moduleName; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterModuleName) {
			listener.enterModuleName(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitModuleName) {
			listener.exitModuleName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitModuleName) {
			return visitor.visitModuleName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameAccessChainContext extends ParserRuleContext {
	public leadingNameAccess(): LeadingNameAccessContext {
		return this.getRuleContext(0, LeadingNameAccessContext);
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MoveParser.Identifier);
		} else {
			return this.getToken(MoveParser.Identifier, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_nameAccessChain; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterNameAccessChain) {
			listener.enterNameAccessChain(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitNameAccessChain) {
			listener.exitNameAccessChain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitNameAccessChain) {
			return visitor.visitNameAccessChain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddressBlockContext extends ParserRuleContext {
	public leadingNameAccess(): LeadingNameAccessContext {
		return this.getRuleContext(0, LeadingNameAccessContext);
	}
	public attributes(): AttributesContext[];
	public attributes(i: number): AttributesContext;
	public attributes(i?: number): AttributesContext | AttributesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributesContext);
		} else {
			return this.getRuleContext(i, AttributesContext);
		}
	}
	public module(): ModuleContext[];
	public module(i: number): ModuleContext;
	public module(i?: number): ModuleContext | ModuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleContext);
		} else {
			return this.getRuleContext(i, ModuleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MoveParser.RULE_addressBlock; }
	// @Override
	public enterRule(listener: MoveListener): void {
		if (listener.enterAddressBlock) {
			listener.enterAddressBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MoveListener): void {
		if (listener.exitAddressBlock) {
			listener.exitAddressBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MoveVisitor<Result>): Result {
		if (visitor.visitAddressBlock) {
			return visitor.visitAddressBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}



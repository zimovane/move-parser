import { ParserRuleContext } from "antlr4ts";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import * as SP from "./antlr/MoveParser";

import { MoveVisitor } from "./antlr/MoveVisitor";
import { ParseOptions } from "./types";
import * as AST from "./ast-types";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";

interface SourceLocation {
  start: {
    line: number;
    column: number;
  };
  end: {
    line: number;
    column: number;
  };
}

interface WithMeta {
  __withMeta: never;
}

type ASTBuilderNode = AST.ASTNode & WithMeta;

export class ASTBuilder
  extends AbstractParseTreeVisitor<ASTBuilderNode>
  implements MoveVisitor<ASTBuilderNode | ASTBuilderNode[]>
{
  public result: AST.File | null = null;
  private _currentContract?: string;

  constructor(public options: ParseOptions) {
    super();
  }
  defaultResult(): AST.ASTNode & WithMeta {
    throw new Error("Unknown node");
  }

  aggregateResult() {
    return { type: "" } as unknown as AST.ASTNode & WithMeta;
  }

  visitModule(ctx: SP.ModuleContext) {
    return this.visit(ctx.getChild(0));
  }

  // visitUseDecl(ctx:SP.UseDeclContext) {
  //   if(ctx.useAlias() > 0){

  //   }
  // }

}

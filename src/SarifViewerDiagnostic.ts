/**
This file is part of Scan.

Scan is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
Scan is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Scan.  If not, see <https://www.gnu.org/licenses/>.
*/

import * as vscode from "vscode";
import { ResultInfo, RunInfo } from "./common/Interfaces";
import { Result } from "sarif";

export class SarifViewerVsCodeDiagnostic extends vscode.Diagnostic
  implements vscode.Diagnostic {
  public constructor(
    public readonly runInfo: RunInfo,
    public readonly resultInfo: ResultInfo,
    public readonly rawResult: Result,
    range: vscode.Range,
    message: string,
    severity?: vscode.DiagnosticSeverity
  ) {
    super(range, message, severity);
  }
}

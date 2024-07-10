/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./portalmultifilesuploader/index.ts":
/*!*******************************************!*\
  !*** ./portalmultifilesuploader/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   portalmultifilesuploader: () => (/* binding */ portalmultifilesuploader)\n/* harmony export */ });\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\nclass EntityReference {\n  constructor(typeName, id) {\n    this.typeName = typeName;\n    this.id = id;\n  }\n}\nclass AttachedFile {\n  constructor(annotationId, fileName, mimeType, fileContent, fileSize) {\n    this.annotationId = annotationId;\n    this.fileName = fileName;\n    this.mimeType = mimeType;\n    this.fileContent = fileContent;\n    this.fileSize = fileSize;\n  }\n}\nclass portalmultifilesuploader {\n  constructor() {\n    this.Files = [];\n    this.CreateFormUploadDiv = () => {\n      var UploadForm = document.createElement(\"div\");\n      var UploadLabel = document.createElement(\"label\");\n      UploadLabel.htmlFor = \"file-upload\";\n      UploadLabel.id = \"lbl-file-upload\";\n      UploadLabel.innerText = \"Choose Files to Upload\";\n      var UploadInput = document.createElement(\"input\");\n      UploadInput.id = \"file-upload\";\n      UploadInput.type = \"file\";\n      UploadInput.multiple = true;\n      UploadInput.addEventListener(\"change\", this.handleBrowse);\n      var DragDiv = document.createElement(\"Div\");\n      DragDiv.id = \"watermarkdiv\";\n      DragDiv.className = \"watermarkdiv\";\n      DragDiv.innerText = \"or drop files here...\";\n      var catchedfileslist = document.createElement(\"ol\");\n      catchedfileslist.id = \"catchedfileslist\";\n      var fileCatcher = this.createDiv(\"files-catcher\", \"files\", [catchedfileslist]);\n      var filesHolder = this.createDiv(\"file-holder\", \"\", [DragDiv, fileCatcher]);\n      var UploadButton = document.createElement(\"button\");\n      UploadButton.innerText = \"Upload\";\n      UploadButton.className = \"buttons\";\n      UploadButton.addEventListener(\"click\", this.handleUpload);\n      var ClearButton = document.createElement(\"button\");\n      ClearButton.innerText = \"Reset\";\n      ClearButton.className = \"buttons\";\n      ClearButton.addEventListener(\"click\", this.handleReset);\n      var leftDiv = this.createDiv(\"left-container\", \"left-container\", [UploadLabel, UploadInput, UploadButton, ClearButton]);\n      var rightDiv = this.createDiv(\"right-container\", \"right-container\", [filesHolder]);\n      rightDiv.addEventListener(\"dragover\", this.FileDragHover);\n      rightDiv.addEventListener(\"dragleave\", this.FileDragHover);\n      rightDiv.addEventListener(\"drop\", this.handleBrowse);\n      var mainContainer = this.createDiv(\"main-container\", \"main-container\", [leftDiv, rightDiv]);\n      UploadForm.appendChild(mainContainer);\n      return UploadForm;\n    };\n    this.handleBrowse = e => {\n      e.preventDefault();\n      console.log(\"handleBrowse\");\n      console.log(e);\n      var files = e.target.files || e.dataTransfer.files;\n      if (files.length > 0) {\n        this.addFiles(files);\n      }\n    };\n    this.handleUpload = e => __awaiter(this, void 0, void 0, function* () {\n      var _this = this;\n      console.log(\"handleUpload\");\n      console.log(e);\n      var files = this.Files;\n      var valid = files && files.length > 0;\n      if (!valid) {\n        alert(\"Please select a file!\");\n        return;\n      }\n      var uploadedFiles = [];\n      var _loop = function* _loop() {\n        var file = files ? files[i].file : \"\";\n        if (file !== \"\") {\n          yield new Promise(resolve => {\n            _this.toBase64String(file, (file, text) => {\n              var type = file.type;\n              var notesEntity = new AttachedFile(\"\", file.name, type, text, file.size);\n              uploadedFiles.push(notesEntity);\n              resolve();\n            });\n          });\n        }\n      };\n      for (var i = 0; i < files.length; i++) {\n        yield* _loop();\n      }\n      if (uploadedFiles.length > 0) {\n        yield this.addAttachments(uploadedFiles);\n      }\n      alert(\"uploaded \".concat(files.length, \" number of files as attachments\"));\n      this.clearAttachments();\n    });\n    this.clearAttachments = () => {\n      var fileList = document.getElementById(\"catchedfileslist\");\n      if (fileList) {\n        while (fileList.hasChildNodes()) {\n          fileList.removeChild(fileList.firstChild);\n        }\n      }\n      this.Files = [];\n      this.$id(\"watermarkdiv\").style.display = \"block\";\n    };\n    this.addAttachments = files => __awaiter(this, void 0, void 0, function* () {\n      var fileData = files.map(file => {\n        var notesEntity = {};\n        var fileContent = file.fileContent;\n        fileContent = fileContent.substring(fileContent.indexOf(\",\") + 1, fileContent.length);\n        notesEntity[\"documentbody\"] = fileContent;\n        notesEntity[\"filename\"] = file.fileName;\n        notesEntity[\"filesize\"] = file.fileSize;\n        notesEntity[\"mimetype\"] = file.mimeType;\n        notesEntity[\"subject\"] = file.fileName;\n        notesEntity[\"objecttypecode\"] = this.entityReference.typeName;\n        notesEntity[\"objectid_\".concat(this.entityReference.typeName, \"@odata.bind\")] = \"/\".concat(this.CollectionNameFromLogicalName(this.entityReference.typeName), \"(\").concat(this.entityReference.id, \")\");\n        return {\n          index: \"1\",\n          base64: notesEntity.documentbody,\n          mimeType: notesEntity.mimetype,\n          fileName: notesEntity.filename,\n          mainbase64: \"data:\" + notesEntity.mimetype + \";base64,\" + notesEntity.documentbody\n        };\n      });\n      // @ts-expect-error: Xrm may not be present in window.parent in some environments\n      if (window.parent.Xrm == undefined) {\n        var url = 'https://prod2-07.centralindia.logic.azure.com:443/workflows/45477bdfc6ef4ce6944f6263af1d4c42/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=7cKgxerbqoAQsrxhD2PlqrW9TgR-AG_x8WJb-ZmN9aw';\n        var myApiResult = yield fetch(url, {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(fileData)\n        });\n        var result = yield myApiResult.json();\n        if (myApiResult.status == 200) {\n          alert('Uploaded Successfully');\n        } else {\n          alert('Please contact admin');\n        }\n      }\n    });\n    this.CollectionNameFromLogicalName = entityLogicalName => {\n      if (entityLogicalName[entityLogicalName.length - 1] != \"s\") {\n        return \"\".concat(entityLogicalName, \"s\");\n      } else {\n        return \"\".concat(entityLogicalName, \"ies\");\n      }\n    };\n    this.toBase64String = (file, successFn) => {\n      var reader = new FileReader();\n      reader.readAsDataURL(file);\n      reader.onload = () => successFn(file, reader.result);\n      console.log(reader.result);\n      return reader.result;\n    };\n    this.$id = id => {\n      return document.getElementById(id);\n    };\n    this.handleReset = e => {\n      console.log(\"handleReset\");\n      console.log(e);\n      this.clearAttachments();\n    };\n    this.FileDragHover = e => {\n      e.stopPropagation();\n      e.preventDefault();\n      console.log(\"dragover\", e);\n    };\n  }\n  init(context, notifyOutputChanged, state, container) {\n    this.Files = [];\n    this._context = context;\n    this.entityReference = new EntityReference(context.page.entityTypeName, context.page.entityId);\n    var UploadForm = this.CreateFormUploadDiv();\n    container.appendChild(UploadForm);\n  }\n  createDiv(divid) {\n    var classname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n    var childElements = arguments.length > 2 ? arguments[2] : undefined;\n    var _div = document.createElement(\"div\");\n    _div.id = divid;\n    classname ? _div.className = classname : \"\";\n    if (childElements != null && (childElements === null || childElements === void 0 ? void 0 : childElements.length) > 0) {\n      childElements.forEach(child => {\n        _div.appendChild(child);\n      });\n    }\n    return _div;\n  }\n  addFiles(files) {\n    var counter = this.Files.length;\n    if (counter > 0 || files.length > 0) {\n      var filesDiv = this.$id(\"watermarkdiv\");\n      filesDiv.style.display = \"none\";\n    }\n    var fileList = this.$id(\"catchedfileslist\");\n    for (var i = 0; i < files.length; i++) {\n      counter++;\n      var nodetype = {};\n      nodetype.id = \"progress\" + counter;\n      nodetype.file = files[i];\n      var fileNode = document.createElement(\"li\");\n      fileNode.className = \"fileNode\";\n      var text = document.createTextNode(files[i].name);\n      fileNode.appendChild(text);\n      fileList.appendChild(fileNode);\n      this.Files[this.Files.length] = nodetype;\n    }\n  }\n  updateView(context) {\n    // Add code to update control view\n  }\n  getOutputs() {\n    return {};\n  }\n  destroy() {}\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./portalmultifilesuploader/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./portalmultifilesuploader/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('portalmultifileuploader.portalmultifilesuploader', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.portalmultifilesuploader);
} else {
	var portalmultifileuploader = portalmultifileuploader || {};
	portalmultifileuploader.portalmultifilesuploader = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.portalmultifilesuploader;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}
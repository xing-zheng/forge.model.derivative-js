/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Diagnostics', 'model/Result', 'model/Formats', 'model/Manifest', 'model/Metadata', 'model/InputStream', 'model/Job', 'model/JobPayload'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Diagnostics'), require('../model/Result'), require('../model/Formats'), require('../model/Manifest'), require('../model/Metadata'), require('../model/InputStream'), require('../model/Job'), require('../model/JobPayload'));
  } else {
    // Browser globals (root is window)
    if (!root.ForgeModelDerivative) {
      root.ForgeModelDerivative = {};
    }
    root.ForgeModelDerivative.DerivativesApi = factory(root.ForgeModelDerivative.ApiClient, root.ForgeModelDerivative.Diagnostics, root.ForgeModelDerivative.Result, root.ForgeModelDerivative.Formats, root.ForgeModelDerivative.Manifest, root.ForgeModelDerivative.Metadata, root.ForgeModelDerivative.InputStream, root.ForgeModelDerivative.Job, root.ForgeModelDerivative.JobPayload);
  }
}(this, function(ApiClient, Diagnostics, Result, Formats, Manifest, Metadata, InputStream, Job, JobPayload) {
  'use strict';

  /**
   * Derivatives service.
   * @module api/DerivativesApi
   */

  /**
   * Constructs a new DerivativesApi. 
   * @alias module:api/DerivativesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteManifest operation.
     * @callback module:api/DerivativesApi~deleteManifestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Result} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the manifest and all its translated output files (derivatives). However, it does not delete the design source file. 
     * @param {String} urn The Base64 (URL Safe) encoded design URN 
     * @param {module:api/DerivativesApi~deleteManifestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Result}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Result}
     */
    this.deleteManifestEndPoint ='/modelderivative/v2/designdata/{urn}/manifest' ;
    this.deleteManifest = function(urn, callback) {
      var postBody = null;

      // verify the required parameter 'urn' is set
      if (urn == undefined || urn == null) {
        throw "Missing the required parameter 'urn' when calling deleteManifest";
      }


      var pathParams = {
        'urn': urn
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_access_code', 'oauth2_application'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Result;

      return this.apiClient.callApi(
        this.deleteManifestEndPoint, 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getDerivativeManifest operation.
     * @callback module:api/DerivativesApi~getDerivativeManifestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Downloads a selected derivative. To download the file, you need to specify the file’s URN, which you retrieve by calling the [GET {urn}/manifest](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET) endpoint.  Note that the Model Derivative API uses 2 types of URNs. The **design URN** is generated when you upload the source design file to Forge, and is used when calling most of the Model Derivative endpoints. A **derivative URN** is generated for each translated output file format, and is used for downloading the output design files.  You can set the range of bytes that are returned when downloading the derivative, using the range header. 
     * @param {String} urn The Base64 (URL Safe) encoded design URN 
     * @param {String} derivativeUrn The URL-encoded URN of the derivatives. The URN is retrieved from the GET :urn/manifest endpoint. 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.range This is the standard RFC 2616 range request header. It only supports one range specifier per request: 1. Range:bytes&#x3D;0-63 (returns the first 64 bytes) 2. Range:bytes&#x3D;64-127 (returns the second set of 64 bytes) 3. Range:bytes&#x3D;1022- (returns all the bytes from offset 1022 to the end) 4. If the range header is not specified, the whole content is returned. 
     * @param {module:api/DerivativesApi~getDerivativeManifestCallback} callback The callback function, accepting three arguments: error, data, response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.getDerivativeManifestEndPoint ='/modelderivative/v2/designdata/{urn}/manifest/{derivativeUrn}' ;
    this.getDerivativeManifest = function(urn, derivativeUrn, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'urn' is set
      if (urn == undefined || urn == null) {
        throw "Missing the required parameter 'urn' when calling getDerivativeManifest";
      }

      // verify the required parameter 'derivativeUrn' is set
      if (derivativeUrn == undefined || derivativeUrn == null) {
        throw "Missing the required parameter 'derivativeUrn' when calling getDerivativeManifest";
      }


      var pathParams = {
        'urn': urn,
        'derivativeUrn': derivativeUrn
      };
      var queryParams = {
      };
      var headerParams = {
        'Range': opts['range']
      };
      var formParams = {
      };

      var authNames = ['oauth2_access_code', 'oauth2_application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/octet-stream'];
      var returnType = null;

      return this.apiClient.callApi(
        this.getDerivativeManifestEndPoint, 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getFormats operation.
     * @callback module:api/DerivativesApi~getFormatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Formats} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an up-to-date list of Forge-supported translations, that you can use to identify which types of derivatives are supported for each source file type. You can set this endpoint to only return the list of supported translations if they have been updated since a specified date.  See the [Supported Translation Formats table](https://developer.autodesk.com/en/docs/model-derivative/v2/overview/supported-translations) for more details about supported translations.  Note that we are constantly adding new file formats to the list of Forge translations. 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.ifModifiedSince The supported formats are only returned if they were modified since the specified date. An invalid date returns the latest supported format list. If the supported formats have not been modified since the specified date, the endpoint returns a &#x60;NOT MODIFIED&#x60; (304) response. 
     * @param {String} opts.acceptEncoding If specified with &#x60;gzip&#x60; or &#x60;*&#x60;, content will be compressed and returned in a GZIP format. 
     * @param {module:api/DerivativesApi~getFormatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Formats}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Formats}
     */
    this.getFormatsEndPoint ='/modelderivative/v2/designdata/formats' ;
    this.getFormats = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince'],
        'Accept-Encoding': opts['acceptEncoding']
      };
      var formParams = {
      };

      var authNames = ['oauth2_access_code', 'oauth2_application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Formats;

      return this.apiClient.callApi(
        this.getFormatsEndPoint, 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getManifest operation.
     * @callback module:api/DerivativesApi~getManifestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Manifest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns information about derivatives that correspond to a specific source file, including derviative URNs and statuses.  The URNs of the derivatives are used to download the generated derivatives when calling the [GET {urn}/manifest/{derivativeurn}](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-derivativeurn-GET) endpoint.  The statuses are used to verify whether the translation of requested output files is complete.  Note that different output files might complete their translation processes at different times, and therefore may have different &#x60;status&#x60; values.  When translating a source file a second time, the previously created manifest is not deleted; it appends the information (only new translations) to the manifest. 
     * @param {String} urn The Base64 (URL Safe) encoded design URN 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptEncoding If specified with &#x60;gzip&#x60; or &#x60;*&#x60;, content will be compressed and returned in a GZIP format. 
     * @param {module:api/DerivativesApi~getManifestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Manifest}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Manifest}
     */
    this.getManifestEndPoint ='/modelderivative/v2/designdata/{urn}/manifest' ;
    this.getManifest = function(urn, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'urn' is set
      if (urn == undefined || urn == null) {
        throw "Missing the required parameter 'urn' when calling getManifest";
      }


      var pathParams = {
        'urn': urn
      };
      var queryParams = {
      };
      var headerParams = {
        'Accept-Encoding': opts['acceptEncoding']
      };
      var formParams = {
      };

      var authNames = ['oauth2_access_code', 'oauth2_application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Manifest;

      return this.apiClient.callApi(
        this.getManifestEndPoint, 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getMetadata operation.
     * @callback module:api/DerivativesApi~getMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Metadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of model view (metadata) IDs for a design model. The metadata ID enables end users to select an object tree and properties for a specific model view.  Although most design apps (e.g., Fusion and Inventor) only allow a single model view (object tree and set of properties), some apps (e.g., Revit) allow users to design models with multiple model views (e.g., HVAC, architecture, perspective).  Note that you can only retrieve metadata from an input file that has been translated into an SVF file. 
     * @param {String} urn The Base64 (URL Safe) encoded design URN 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptEncoding If specified with &#x60;gzip&#x60; or &#x60;*&#x60;, content will be compressed and returned in a GZIP format. 
     * @param {module:api/DerivativesApi~getMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Metadata}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Metadata}
     */
    this.getMetadataEndPoint ='/modelderivative/v2/designdata/{urn}/metadata' ;
    this.getMetadata = function(urn, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'urn' is set
      if (urn == undefined || urn == null) {
        throw "Missing the required parameter 'urn' when calling getMetadata";
      }


      var pathParams = {
        'urn': urn
      };
      var queryParams = {
      };
      var headerParams = {
        'Accept-Encoding': opts['acceptEncoding']
      };
      var formParams = {
      };

      var authNames = ['oauth2_access_code', 'oauth2_application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Metadata;

      return this.apiClient.callApi(
        this.getMetadataEndPoint, 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getModelviewMetadata operation.
     * @callback module:api/DerivativesApi~getModelviewMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Metadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an object tree, i.e., a hierarchical list of objects for a model view.  To call this endpoint you first need to call the [GET {urn}/metadata](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-GET) endpoint, to determine which model view (object tree and set of properties) to use.  Although most design apps (e.g., Fusion and Inventor) only allow a single model view, some apps (e.g., Revit) allow users to design models with multiple model views (e.g., HVAC, architecture, perspective).  Note that you can only retrieve metadata from an input file that has been translated into an SVF file. 
     * @param {String} urn The Base64 (URL Safe) encoded design URN 
     * @param {String} guid Unique model view ID. Call [GET {urn}/metadata](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-GET) to get the ID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptEncoding If specified with &#x60;gzip&#x60; or &#x60;*&#x60;, content will be compressed and returned in a GZIP format. 
     * @param {module:api/DerivativesApi~getModelviewMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Metadata}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Metadata}
     */
    this.getModelviewMetadataEndPoint ='/modelderivative/v2/designdata/{urn}/metadata/{guid}' ;
    this.getModelviewMetadata = function(urn, guid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'urn' is set
      if (urn == undefined || urn == null) {
        throw "Missing the required parameter 'urn' when calling getModelviewMetadata";
      }

      // verify the required parameter 'guid' is set
      if (guid == undefined || guid == null) {
        throw "Missing the required parameter 'guid' when calling getModelviewMetadata";
      }


      var pathParams = {
        'urn': urn,
        'guid': guid
      };
      var queryParams = {
      };
      var headerParams = {
        'Accept-Encoding': opts['acceptEncoding']
      };
      var formParams = {
      };

      var authNames = ['oauth2_access_code', 'oauth2_application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Metadata;

      return this.apiClient.callApi(
        this.getModelviewMetadataEndPoint, 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getModelviewProperties operation.
     * @callback module:api/DerivativesApi~getModelviewPropertiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Metadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of properties for each object in an object tree. Properties are returned according to object ID and do not follow a hierarchical structure.  The following image displays a typical list of properties for a Revit object:  ![](https://developer.doc.autodesk.com/bPlouYTd/7/_images/Properties.png)  To call this endpoint you need to first call the [GET {urn}/metadata](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-GET) endpoint, which returns a list of model view (metadata) IDs for a design input model. Select a model view (metadata) ID to use when calling the Get Properties endpoint.  Note that you can only get properties from a design input file that was previously translated into an SVF file. 
     * @param {String} urn The Base64 (URL Safe) encoded design URN 
     * @param {String} guid Unique model view ID. Call [GET {urn}/metadata](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-GET) to get the ID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptEncoding If specified with &#x60;gzip&#x60; or &#x60;*&#x60;, content will be compressed and returned in a GZIP format. 
     * @param {module:api/DerivativesApi~getModelviewPropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Metadata}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Metadata}
     */
    this.getModelviewPropertiesEndPoint ='/modelderivative/v2/designdata/{urn}/metadata/{guid}/properties' ;
    this.getModelviewProperties = function(urn, guid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'urn' is set
      if (urn == undefined || urn == null) {
        throw "Missing the required parameter 'urn' when calling getModelviewProperties";
      }

      // verify the required parameter 'guid' is set
      if (guid == undefined || guid == null) {
        throw "Missing the required parameter 'guid' when calling getModelviewProperties";
      }


      var pathParams = {
        'urn': urn,
        'guid': guid
      };
      var queryParams = {
      };
      var headerParams = {
        'Accept-Encoding': opts['acceptEncoding']
      };
      var formParams = {
      };

      var authNames = ['oauth2_access_code', 'oauth2_application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Metadata;

      return this.apiClient.callApi(
        this.getModelviewPropertiesEndPoint, 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the getThumbnail operation.
     * @callback module:api/DerivativesApi~getThumbnailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InputStream} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the thumbnail for the source file. 
     * @param {String} urn The Base64 (URL Safe) encoded design URN 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.width The desired width of the thumbnail. Possible values are 100, 200 and 400. 
     * @param {Integer} opts.height The desired height of the thumbnail. Possible values are 100, 200 and 400. 
     * @param {module:api/DerivativesApi~getThumbnailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InputStream}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InputStream}
     */
    this.getThumbnailEndPoint ='/modelderivative/v2/designdata/{urn}/thumbnail' ;
    this.getThumbnail = function(urn, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'urn' is set
      if (urn == undefined || urn == null) {
        throw "Missing the required parameter 'urn' when calling getThumbnail";
      }


      var pathParams = {
        'urn': urn
      };
      var queryParams = {
        'width': opts['width'],
        'height': opts['height']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_access_code', 'oauth2_application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/octet-stream'];
      var returnType = InputStream;

      return this.apiClient.callApi(
        this.getThumbnailEndPoint, 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the translate operation.
     * @callback module:api/DerivativesApi~translateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Job} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Translate a source file from one format to another.  Derivatives are stored in a manifest that is updated each time this endpoint is used on a source file.  Note that this endpoint is asynchronous and initiates a process that runs in the background, rather than keeping an open HTTP connection until completion. Use the [GET {urn}/manifest](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET) endpoint to poll for the job’s completion. 
     * @param {module:model/JobPayload} job 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xAdsForce &#x60;true&#x60;: the endpoint replaces previously translated output file types with the newly generated derivatives  &#x60;false&#x60; (default): previously created derivatives are not replaced  (default to false)
     * @param {module:api/DerivativesApi~translateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Job}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Job}
     */
    this.translateEndPoint ='/modelderivative/v2/designdata/job' ;
    this.translate = function(job, opts, callback) {
      opts = opts || {};
      var postBody = job;

      // verify the required parameter 'job' is set
      if (job == undefined || job == null) {
        throw "Missing the required parameter 'job' when calling translate";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'x-ads-force': opts['xAdsForce']
      };
      var formParams = {
      };

      var authNames = ['oauth2_access_code', 'oauth2_application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Job;

      return this.apiClient.callApi(
        this.translateEndPoint, 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));

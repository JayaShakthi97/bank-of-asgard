/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { AsgardeoSPAClient } from "@asgardeo/auth-react";
import { environmentConfig } from "../util/environment-util";
import { transformValidationRules } from "../util/password-validation-util";

/**
 * Get an axios instance.
 */
const spaClient = AsgardeoSPAClient.getInstance();

export const getPasswordPolicy = () => {
  const requestConfig = {
    method: "GET",
    url: `${environmentConfig.ASGARDEO_BASE_URL}/api/server/v1/validation-rules`,
  };

  return spaClient
    .httpRequest(requestConfig)
    .then((response) => {
      const data = response.data;

      return transformValidationRules(data);
    })
    .catch((error) => {
      throw error;
    });
};

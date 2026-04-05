import { BASE_URL as bul_util, formatTestName } from "../utils";
import { BASE_URL as bul_testtul, formatUpperCaseString } from "../testutil";

console.log(bul_util); // "https://app.staging.com"
console.log(bul_testtul); // "https://app.vwo.com"
console.log (formatTestName("login"));
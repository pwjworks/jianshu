import {
  createGlobalStyle
} from 'styled-components'

const IconGlobalStyle = createGlobalStyle `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1582822470393'); /* IE9 */
  src: url('./iconfont.eot?t=1582822470393#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOoAAsAAAAAB6AAAANbAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqCXIJQATYCJAMQCwoABCAFhG0HRxvBBsieh7FjokTiiWfGxutKBNXQ7ZW0T1QCDqGYSIRkPEK3IhxGgEVbXCtG5H915pflXFW5DD5icgpkkANYR2UeabqbirgB4ZROfd0YEiBAIgNx///ncnrXeJ6F89tZLmNN2vP5US/AeGtgYw+htEAS9IaxKy9iPQEMU6RAx3UtPUCIjG4BxL3LoQJJuYhEFiWQiJKxDegJbEhuEe4BePS/H/+QFQFItgKj78llrQEVX3lvwnj1/9Uwy0VAMJ4VbBIoYAs0iOtS+ykchrYwqjQW5QFzhADGqgm+Cf8fCfciJ+ZfHkgIBjEFI3MFcITCBb7ybIwEX0GMAF/hDAV4IZ3nwAAugGdEPpi/iYSWMCJktDRmkKos6rUrh64l9Hj3O7w7afE0XRlKlUE91CNNn7FrCu0bN009K20DGEEv0a0P0Bq7fQ19REnvmQOw+qC07SpCgYsv0YsXyrNnPc+f9257Wdx7cNvFNUn+LOXlSzunMC4+6u6dzEz7Pda+ejzVlmGwO3eYUTc2prDKVW+LqL9wHi6Z9Y8Tah6zIf+16hfusvZeoUpzlb0Uf5eF+PWCdGSrTAskKq7Bs6XmiqLXc+z87vjRvyfEfoydAo//pMV5S4T+Rw/7qh8/fOjs0ffwUX+WeGPehcOQegoS16zDJ08Ka4V1VLqOciAVr8NrG0MQYAd/xPN9+vgShkj4Cm74V7+Bh4vv2+cOLflKJBEALytH10Hnjgj9BC9c0FrwZwQtc1oVGYZuWWzzNUfLSHSTwECB/xFj7dUYyv3WmQRidAxpgMlQiBi0ySkwIcmBKaIchmT1k5dGsmCoBwI4tAEAMsxxEAxxEbBh7qMiOQw2Y7yFCMPCQCkxck5JXC5abTGVM0PWlsguPeA3LROnQXYXcyzwqlZS5NMUZoVcXjkzLSMbrWd+Zo0xILTQkcW5KZtWwCfXgc2Y1xuQg1bAzXSe5uQ8WJSebpa9KE0P+ICqZmFUHGOQaZaQuegC/Ey3MEdzn+/COCzgpbJqcBV2BWMJcdUvy5QmowVaL/e3wl3LJSELOWThOJPMZAnwkdUBK+M1QwGyYHkrN0bHpXH2CAQVSUf5zLbytPmVvidcBIPRrENAGInIBtK5z5MaZH7d5RUqVWqqfoehul2uDgAA') format('woff2'),
  url('./iconfont.woff?t=1582822470393') format('woff'),
  url('./iconfont.ttf?t=1582822470393') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1582822470393#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

export default IconGlobalStyle
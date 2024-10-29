const { getAWSImageUrl } = require("./common");

module.exports.generateEmailHtmlForgotPassword = (url) => {
  return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <title></title>

    <style type="text/css">
      @media only screen and (min-width: 620px) {
        .u-row {
          width: 600px !important;
        }

        .u-row .u-col {
          vertical-align: top;
        }

        .u-row .u-col-50 {
          width: 300px !important;
        }

        .u-row .u-col-100 {
          width: 600px !important;
        }
      }

      @media only screen and (max-width: 620px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }

        .u-row {
          width: 100% !important;
        }

        .u-row .u-col {
          display: block !important;
          width: 100% !important;
          min-width: 320px !important;
          max-width: 100% !important;
        }

        .u-row .u-col > div {
          margin: 0 auto;
        }

        .u-row .u-col img {
          max-width: 100% !important;
        }
      }

      body {
        margin: 0;
        padding: 0;
      }

      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }

      p {
        margin: 0;
      }

      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors="true"] {
        color: inherit !important;
        text-decoration: none !important;
      }

      table,
      td {
        color: #000000;
      }
      #u_body a {
        color: #161a39;
        text-decoration: underline;
      }
    </style>

    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
  </head>

  <body
    class="clean-body u_body"
    style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #f9f9f9;
      color: #000000;
    "
  >
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table
      id="u_body"
      style="
        border-collapse: collapse;
        table-layout: fixed;
        border-spacing: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        vertical-align: top;
        min-width: 320px;
        margin: 0 auto;
        background-color: #f9f9f9;
        width: 100%;
      "
      cellpadding="0"
      cellspacing="0"
    >
      <tbody>
        <tr style="vertical-align: top">
          <td
            style="
              word-break: break-word;
              border-collapse: collapse !important;
              vertical-align: top;
            "
          >
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->

            <div
              class="u-row-container"
              style="padding: 0px; background-color: #f9f9f9"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #f9f9f9;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f9f9f9;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 15px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  height="0px"
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    border-spacing: 0;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    vertical-align: top;
                                    border-top: 1px solid #f9f9f9;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <tbody>
                                    <tr style="vertical-align: top">
                                      <td
                                        style="
                                          word-break: break-word;
                                          border-collapse: collapse !important;
                                          vertical-align: top;
                                          font-size: 0px;
                                          line-height: 0px;
                                          mso-line-height-rule: exactly;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <span>&#160;</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffffff;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 25px 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <img
                                        align="center"
                                        border="0"
                                        src="${getAWSImageUrl(
                                          "maunual/logo-invetailor.jpg"
                                        )}"
                                        alt="Image"
                                        title="Image"
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 29%;
                                          max-width: 168.2px;
                                        "
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #927f58;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #161a39;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 35px 10px 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <img
                                        align="center"
                                        border="0"
                                        src="${getAWSImageUrl(
                                          "maunual/image-1.png"
                                        )}"
                                        alt="Image"
                                        title="Image"
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 10%;
                                          max-width: 58px;
                                        "
                                        width="58"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 10px 30px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 140%;
                                      text-align: center;
                                    "
                                  >
                                    <span
                                      style="
                                        font-size: 28px;
                                        line-height: 39.2px;
                                        color: #ffffff;
                                        font-family: Lato, sans-serif;
                                      "
                                      >Venligst nulstil din adgangskode
                                    </span>
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffffff;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 40px 40px 30px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 18px;
                                        line-height: 25.2px;
                                        color: #666666;
                                      "
                                      >Hej,</span
                                    >
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                    &nbsp;
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 18px;
                                        line-height: 25.2px;
                                        color: #666666;
                                      "
                                      >Vi har modtaget en anmodning om at nulstille din adgangskode. Hvis du har fremsat denne anmodning, skal du klikke på linket nedenfor for at nulstille din adgangskode.</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 40px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <!--[if mso
                                  ]><style>
                                    .v-button {
                                      background: transparent !important;
                                    }
                                  </style><!
                                [endif]-->
                                <div align="left">
                                  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:51px; v-text-anchor:middle; width:205px;" arcsize="2%"  stroke="f" fillcolor="#927f58"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
                                  <a
                                    href="${url}"
                                    target="_blank"
                                    class="v-button"
                                    style="
                                      box-sizing: border-box;
                                      display: inline-block;
                                      text-decoration: none;
                                      -webkit-text-size-adjust: none;
                                      text-align: center;
                                      color: #ffffff;
                                      background-color: #927f58;
                                      border-radius: 1px;
                                      -webkit-border-radius: 1px;
                                      -moz-border-radius: 1px;
                                      width: auto;
                                      max-width: 100%;
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      word-wrap: break-word;
                                      mso-border-alt: none;
                                      font-size: 14px;
                                    "
                                  >
                                    <span
                                      style="
                                        display: block;
                                        padding: 15px 40px;
                                        line-height: 120%;
                                      "
                                      ><span
                                        style="
                                          font-size: 18px;
                                          line-height: 21.6px;
                                        "
                                        >Nulstil adgangskode</span
                                      ></span
                                    >
                                  </a>
                                  <!--[if mso]></center></v:roundrect><![endif]-->
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 40px 40px 30px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        color: #888888;
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      "
                                      >
                                      <em
                                        ><span
                                          style="
                                            font-size: 16px;
                                            line-height: 22.4px;
                                          "
                                          >Hvis du ikke har anmodet om en nulstilling af adgangskoden, skal du ignorere denne e-mail, og din konto forbliver sikker.</span
                                        ></em
                                      ></span>
                                    <br />
                                    <span
                                      style="
                                        color: #888888;
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      "
                                      ><em
                                        ><span
                                          style="
                                            font-size: 16px;
                                            line-height: 22.4px;
                                          "
                                          >&nbsp;</span
                                        ></em
                                      ></span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #927f58;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #927f58;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 20px 20px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-50"
                    style="
                      max-width: 320px;
                      min-width: 300px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 20px 20px 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 14px;
                                        line-height: 19.6px;
                                        color: #ecf0f1;
                                      "
                                      >Klerkegade 12, st. th. - 1308 København
                                      K</span
                                    >
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 14px;
                                        line-height: 19.6px;
                                        color: #ecf0f1;
                                      "
                                      >Tel: +45 31327890 · CVR: 31731542</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 0px 0px 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-50"
                    style="
                      max-width: 320px;
                      min-width: 300px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px 0px 0px 20px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 25px 10px 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div align="left">
                                  <div style="display: table; max-width: 187px">
                                    <!--[if (mso)|(IE)]><table width="187" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="left"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:187px;"><tr><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        width: 32px !important;
                                        height: 32px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 15px;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                          >
                                            <a
                                              href="#"
                                              title="Facebook"
                                              target="_blank"
                                            >
                                              <img
                                                src="${getAWSImageUrl(
                                                  "maunual/image-4.png"
                                                )}"
                                                alt="Facebook"
                                                title="Facebook"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                "
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        width: 32px !important;
                                        height: 32px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 15px;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                          >
                                            <a
                                              href="#"
                                              title="Twitter"
                                              target="_blank"
                                            >
                                              <img
                                              src="${getAWSImageUrl(
                                                "maunual/image-6.png"
                                              )}"
                                                alt="Twitter"
                                                title="Twitter"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                "
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        width: 32px !important;
                                        height: 32px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 15px;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                          >
                                            <a
                                              href="#"
                                              title="Instagram"
                                              target="_blank"
                                            >
                                              <img
                                              src="${getAWSImageUrl(
                                                "maunual/image-3.png"
                                              )}"
                                                alt="Instagram"
                                                title="Instagram"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                "
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        width: 32px !important;
                                        height: 32px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 0px;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                          >
                                            <a
                                              href="#"
                                              title="LinkedIn"
                                              target="_blank"
                                            >
                                              <img
                                                src="${getAWSImageUrl(
                                                  "maunual/image-5.png"
                                                )}"
                                                alt="LinkedIn"
                                                title="LinkedIn"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                "
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 5px 10px 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="line-height: 140%; font-size: 14px">
                                    <span
                                      style="
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      "
                                      ><span
                                        style="
                                          color: #ecf0f1;
                                          font-size: 14px;
                                          line-height: 19.6px;
                                        "
                                        ><span
                                          style="
                                            line-height: 19.6px;
                                            font-size: 14px;
                                          "
                                          >Inventailor &copy;&nbsp; Alle rettigheder forbeholdes</span
                                        ></span
                                      ></span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div
              class="u-row-container"
              style="padding: 0px; background-color: #f9f9f9"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #927f58;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f9f9f9;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #927f58;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 15px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  height="0px"
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    border-spacing: 0;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    vertical-align: top;
                                    border-top: 1px solid #927f58;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <tbody>
                                    <tr style="vertical-align: top">
                                      <td
                                        style="
                                          word-break: break-word;
                                          border-collapse: collapse !important;
                                          vertical-align: top;
                                          font-size: 0px;
                                          line-height: 0px;
                                          mso-line-height-rule: exactly;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <span>&#160;</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #f9f9f9;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 40px 30px 20px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                ></div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
  </body>
</html>
    `;
};

module.exports.generateEmailHtmlEmailVerification = (url) => {
  return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <title></title>

    <style type="text/css">
      @media only screen and (min-width: 620px) {
        .u-row {
          width: 600px !important;
        }

        .u-row .u-col {
          vertical-align: top;
        }

        .u-row .u-col-50 {
          width: 300px !important;
        }

        .u-row .u-col-100 {
          width: 600px !important;
        }
      }

      @media only screen and (max-width: 620px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }

        .u-row {
          width: 100% !important;
        }

        .u-row .u-col {
          display: block !important;
          width: 100% !important;
          min-width: 320px !important;
          max-width: 100% !important;
        }

        .u-row .u-col > div {
          margin: 0 auto;
        }

        .u-row .u-col img {
          max-width: 100% !important;
        }
      }

      body {
        margin: 0;
        padding: 0;
      }

      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }

      p {
        margin: 0;
      }

      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors="true"] {
        color: inherit !important;
        text-decoration: none !important;
      }

      table,
      td {
        color: #000000;
      }
      #u_body a {
        color: #161a39;
        text-decoration: underline;
      }
    </style>

    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
  </head>

  <body
    class="clean-body u_body"
    style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #f9f9f9;
      color: #000000;
    "
  >
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table
      id="u_body"
      style="
        border-collapse: collapse;
        table-layout: fixed;
        border-spacing: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        vertical-align: top;
        min-width: 320px;
        margin: 0 auto;
        background-color: #f9f9f9;
        width: 100%;
      "
      cellpadding="0"
      cellspacing="0"
    >
      <tbody>
        <tr style="vertical-align: top">
          <td
            style="
              word-break: break-word;
              border-collapse: collapse !important;
              vertical-align: top;
            "
          >
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->

            <div
              class="u-row-container"
              style="padding: 0px; background-color: #f9f9f9"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #f9f9f9;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f9f9f9;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 15px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  height="0px"
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    border-spacing: 0;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    vertical-align: top;
                                    border-top: 1px solid #f9f9f9;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <tbody>
                                    <tr style="vertical-align: top">
                                      <td
                                        style="
                                          word-break: break-word;
                                          border-collapse: collapse !important;
                                          vertical-align: top;
                                          font-size: 0px;
                                          line-height: 0px;
                                          mso-line-height-rule: exactly;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <span>&#160;</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffffff;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 25px 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <img
                                        align="center"
                                        border="0"
                                        src="${getAWSImageUrl(
                                          "maunual/logo-invetailor.jpg"
                                        )}"
                                        alt="Image"
                                        title="Image"
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 29%;
                                          max-width: 168.2px;
                                        "
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #927f58;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #161a39;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 35px 10px 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <img
                                        align="center"
                                        border="0"
                                        src="${getAWSImageUrl(
                                          "maunual/image-1.png"
                                        )}"
                                        alt="Image"
                                        title="Image"
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 10%;
                                          max-width: 58px;
                                        "
                                        width="58"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 10px 30px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 140%;
                                      text-align: center;
                                    "
                                  >
                                    <span
                                      style="
                                        font-size: 28px;
                                        line-height: 39.2px;
                                        color: #ffffff;
                                        font-family: Lato, sans-serif;
                                      "
                                      >Bekræft din e-mail-adresse
                                    </span>
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffffff;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 40px 40px 30px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 18px;
                                        line-height: 25.2px;
                                        color: #666666;
                                      "
                                      >Hej,</span
                                    >
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                    &nbsp;
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 18px;
                                        line-height: 25.2px;
                                        color: #666666;
                                      "
                                      >Tak fordi du tilmeldte dig! Bekræft venligst din e-mailadresse for at fuldføre din registrering. Klik på linket nedenfor for at bekræfte din e-mail.</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 40px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <!--[if mso
                                  ]><style>
                                    .v-button {
                                      background: transparent !important;
                                    }
                                  </style><!
                                [endif]-->
                                <div align="left">
                                  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:51px; v-text-anchor:middle; width:205px;" arcsize="2%"  stroke="f" fillcolor="#927f58"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
                                  <a
                                    href="${url}"
                                    target="_blank"
                                    class="v-button"
                                    style="
                                      box-sizing: border-box;
                                      display: inline-block;
                                      text-decoration: none;
                                      -webkit-text-size-adjust: none;
                                      text-align: center;
                                      color: #ffffff;
                                      background-color: #927f58;
                                      border-radius: 1px;
                                      -webkit-border-radius: 1px;
                                      -moz-border-radius: 1px;
                                      width: auto;
                                      max-width: 100%;
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      word-wrap: break-word;
                                      mso-border-alt: none;
                                      font-size: 14px;
                                    "
                                  >
                                    <span
                                      style="
                                        display: block;
                                        padding: 15px 40px;
                                        line-height: 120%;
                                      "
                                      ><span
                                        style="
                                          font-size: 18px;
                                          line-height: 21.6px;
                                        "
                                        >Verificere</span
                                      ></span
                                    >
                                  </a>
                                  <!--[if mso]></center></v:roundrect><![endif]-->
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 40px 40px 30px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        color: #888888;
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      "
                                      >
                                      <em
                                        ><span
                                          style="
                                            font-size: 16px;
                                            line-height: 22.4px;
                                          "
                                          >Hvis du ikke har anmodet om dette, skal du ignorere denne besked.</span
                                        ></em
                                      ></span>
                                    <br />
                                    <span
                                      style="
                                        color: #888888;
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      "
                                      ><em
                                        ><span
                                          style="
                                            font-size: 16px;
                                            line-height: 22.4px;
                                          "
                                          >&nbsp;</span
                                        ></em
                                      ></span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #927f58;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #927f58;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 20px 20px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-50"
                    style="
                      max-width: 320px;
                      min-width: 300px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 20px 20px 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 14px;
                                        line-height: 19.6px;
                                        color: #ecf0f1;
                                      "
                                      >Klerkegade 12, st. th. - 1308 København
                                      K</span
                                    >
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 14px;
                                        line-height: 19.6px;
                                        color: #ecf0f1;
                                      "
                                      >Tel: +45 31327890 · CVR: 31731542</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 0px 0px 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-50"
                    style="
                      max-width: 320px;
                      min-width: 300px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px 0px 0px 20px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 25px 10px 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div align="left">
                                  <div style="display: table; max-width: 187px">
                                    <!--[if (mso)|(IE)]><table width="187" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="left"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:187px;"><tr><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        width: 32px !important;
                                        height: 32px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 15px;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                          >
                                            <a
                                              href="#"
                                              title="Facebook"
                                              target="_blank"
                                            >
                                              <img
                                                src="${getAWSImageUrl(
                                                  "maunual/image-4.png"
                                                )}"
                                                alt="Facebook"
                                                title="Facebook"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                "
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        width: 32px !important;
                                        height: 32px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 15px;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                          >
                                            <a
                                              href="#"
                                              title="Twitter"
                                              target="_blank"
                                            >
                                              <img
                                              src="${getAWSImageUrl(
                                                "maunual/image-6.png"
                                              )}"
                                                alt="Twitter"
                                                title="Twitter"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                "
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        width: 32px !important;
                                        height: 32px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 15px;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                          >
                                            <a
                                              href="#"
                                              title="Instagram"
                                              target="_blank"
                                            >
                                              <img
                                              src="${getAWSImageUrl(
                                                "maunual/image-3.png"
                                              )}"
                                                alt="Instagram"
                                                title="Instagram"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                "
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        width: 32px !important;
                                        height: 32px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 0px;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                          >
                                            <a
                                              href="#"
                                              title="LinkedIn"
                                              target="_blank"
                                            >
                                              <img
                                                src="${getAWSImageUrl(
                                                  "maunual/image-5.png"
                                                )}"
                                                alt="LinkedIn"
                                                title="LinkedIn"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                "
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 5px 10px 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="line-height: 140%; font-size: 14px">
                                    <span
                                      style="
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      "
                                      ><span
                                        style="
                                          color: #ecf0f1;
                                          font-size: 14px;
                                          line-height: 19.6px;
                                        "
                                        ><span
                                          style="
                                            line-height: 19.6px;
                                            font-size: 14px;
                                          "
                                          >Inventailor &copy;&nbsp; Alle rettigheder forbeholdes</span
                                        ></span
                                      ></span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div
              class="u-row-container"
              style="padding: 0px; background-color: #f9f9f9"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #927f58;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f9f9f9;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #927f58;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 15px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  height="0px"
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    border-spacing: 0;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    vertical-align: top;
                                    border-top: 1px solid #927f58;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <tbody>
                                    <tr style="vertical-align: top">
                                      <td
                                        style="
                                          word-break: break-word;
                                          border-collapse: collapse !important;
                                          vertical-align: top;
                                          font-size: 0px;
                                          line-height: 0px;
                                          mso-line-height-rule: exactly;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <span>&#160;</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #f9f9f9;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 40px 30px 20px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                ></div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
  </body>
</html>
    `;
};

module.exports.generateEmailHtmlOrderSuccess = (emailData, messages) => {
  return `<!--
* This email was built using Tabular.
* For more information, visit https://tabular.email
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]>-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
.gmail-mobile-forced-width {
display: none;
display: none !important;
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t129,.t132,.t16,.t166,.t169,.t175,.t177,.t19,.t22,.t25,.t28{width:420px!important}.t128{mso-line-height-alt:0px!important;line-height:0!important;display:none!important}.t129{padding-left:30px!important;padding-bottom:40px!important;padding-right:30px!important}.t19{padding-bottom:20px!important}.t18{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t177{padding:40px 30px!important}.t121,.t41,.t45,.t49{padding-left:0!important}.t166{padding-bottom:36px!important}.t164{text-align:center!important}.t135,.t137,.t141,.t143,.t147,.t149,.t153,.t155,.t159,.t161,.t35,.t37,.t51,.t53{display:revert!important}.t124,.t125,.t91{display:block!important}.t13,.t139,.t145,.t151,.t157,.t163,.t9{vertical-align:top!important}.t58{width:380px!important}.t56{text-align:left!important}.t39,.t55{vertical-align:middle!important}.t14{text-align:right!important}.t11{padding-bottom:50px!important}.t2,.t5{width:345.33px!important}.t31{width:353px!important}.t41,.t45,.t49{width:303.7px!important}.t126{width:340px!important}.t124{text-align:left!important}.t91{mso-line-height-alt:15px!important;line-height:15px!important}.t123,.t92{vertical-align:top!important;display:inline-block!important;width:100%!important;max-width:800px!important}.t89{padding-bottom:15px!important;padding-right:0!important}.t109,.t119,.t77,.t87{width:800px!important}.t101,.t104,.t107,.t112,.t116,.t62,.t66,.t69,.t72,.t75,.t80,.t84,.t94,.t98{width:600px!important}
}
</style>
<style type="text/css">@media (max-width: 480px) {[class~="x_t128"]{mso-line-height-alt:0px!important;line-height:0px!important;display:none!important;} [class~="x_t129"]{padding-left:30px!important;padding-bottom:40px!important;padding-right:30px!important;width:420px!important;} [class~="x_t19"]{padding-bottom:20px!important;width:420px!important;} [class~="x_t18"]{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important;} [class~="x_t177"]{padding-left:30px!important;padding-top:40px!important;padding-bottom:40px!important;padding-right:30px!important;width:420px!important;} [class~="x_t132"]{width:420px!important;} [class~="x_t166"]{padding-bottom:36px!important;width:420px!important;} [class~="x_t164"]{text-align:center!important;} [class~="x_t135"]{display:revert!important;} [class~="x_t137"]{display:revert!important;} [class~="x_t139"]{vertical-align:top!important;} [class~="x_t159"]{display:revert!important;} [class~="x_t161"]{display:revert!important;} [class~="x_t163"]{vertical-align:top!important;} [class~="x_t153"]{display:revert!important;} [class~="x_t155"]{display:revert!important;} [class~="x_t157"]{vertical-align:top!important;} [class~="x_t147"]{display:revert!important;} [class~="x_t149"]{display:revert!important;} [class~="x_t151"]{vertical-align:top!important;} [class~="x_t141"]{display:revert!important;} [class~="x_t143"]{display:revert!important;} [class~="x_t145"]{vertical-align:top!important;} [class~="x_t175"]{width:420px!important;} [class~="x_t169"]{width:420px!important;} [class~="x_t58"]{width:380px!important;} [class~="x_t56"]{text-align:left!important;} [class~="x_t35"]{display:revert!important;} [class~="x_t37"]{display:revert!important;} [class~="x_t39"]{vertical-align:middle!important;} [class~="x_t16"]{width:420px!important;} [class~="x_t14"]{text-align:right!important;} [class~="x_t13"]{vertical-align:top!important;} [class~="x_t11"]{padding-bottom:50px!important;} [class~="x_t9"]{vertical-align:top!important;} [class~="x_t28"]{width:420px!important;} [class~="x_t5"]{width:345.33px!important;} [class~="x_t2"]{width:345.33px!important;} [class~="x_t22"]{width:420px!important;} [class~="x_t25"]{width:420px!important;} [class~="x_t31"]{width:353px!important;} [class~="x_t51"]{display:revert!important;} [class~="x_t53"]{display:revert!important;} [class~="x_t55"]{vertical-align:middle!important;} [class~="x_t49"]{padding-left:0px!important;width:303.7px!important;} [class~="x_t45"]{padding-left:0px!important;width:303.7px!important;} [class~="x_t126"]{width:340px!important;} [class~="x_t125"]{display:block!important;} [class~="x_t124"]{display:block!important;text-align:left!important;} [class~="x_t91"]{mso-line-height-alt:15px!important;line-height:15px!important;display:block!important;} [class~="x_t92"]{vertical-align:top!important;display:inline-block!important;width:100%!important;max-width:800px!important;} [class~="x_t89"]{padding-bottom:15px!important;padding-right:0px!important;} [class~="x_t123"]{vertical-align:top!important;display:inline-block!important;width:100%!important;max-width:800px!important;} [class~="x_t121"]{padding-left:0px!important;} [class~="x_t41"]{padding-left:0px!important;width:303.7px!important;} [class~="x_t87"]{width:800px!important;} [class~="x_t80"]{width:600px!important;} [class~="x_t84"]{width:600px!important;} [class~="x_t77"]{width:800px!important;} [class~="x_t62"]{width:600px!important;} [class~="x_t66"]{width:600px!important;} [class~="x_t69"]{width:600px!important;} [class~="x_t72"]{width:600px!important;} [class~="x_t75"]{width:600px!important;} [class~="x_t109"]{width:800px!important;} [class~="x_t94"]{width:600px!important;} [class~="x_t98"]{width:600px!important;} [class~="x_t101"]{width:600px!important;} [class~="x_t104"]{width:600px!important;} [class~="x_t107"]{width:600px!important;} [class~="x_t119"]{width:800px!important;} [class~="x_t112"]{width:600px!important;} [class~="x_t116"]{width:600px!important;}}</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;700;800&amp;display=swap" rel="stylesheet" type="text/css" />
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id="body" class="t181" style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;"><div class="t180" style="background-color:#242424;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t179" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#242424"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td><div class="t128" style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t130" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="600" class="t129" style="background-color:#F8F8F8;padding:0 50px 60px 50px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t129" style="background-color:#F8F8F8;width:500px;padding:0 50px 60px 50px;">
<!--<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t17" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="500" class="t16">
<![endif]-->
<!--[if !mso]>-->
<td class="t16" style="width:500px;">
<!--<![endif]-->
<table class="t15" role="presentation" cellpadding="0" cellspacing="0" align="right" valign="top">
<tr class="t14"><td></td><td class="t9" width="370" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t8" style="width:100%;"><tr>
<td class="t7" style="padding:35px 0 0 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t3" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="370" class="t2">
<![endif]-->
<!--[if !mso]>-->
<td class="t2" style="width:370px;">
<!--<![endif]-->
<p class="t1" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t0" style="margin:0;Margin:0;font-weight:bold;mso-line-height-rule:exactly;">BRUGERDETALJER</span></p></td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t6" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="370" class="t5" style="padding:0 0 22px 0;">
<![endif]-->
<!--[if !mso]>-->
<td class="t5" style="width:370px;padding:0 0 22px 0;">
<!--<![endif]-->
<p class="t4" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${
    emailData.userFullName
  }</p>
<p class="t4" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${
    emailData.userEmail
  }</p>
<p class="t4" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${
    emailData.userPhoneCode
  } ${emailData.userMobileNumber}</p>
</td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td><td class="t13" width="130" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t12" style="width:100%;">
    <tr>
<td class="t11" style="padding:0;"><div style="font-size:0px;"><img class="t10" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="70" height="auto" alt="" src="${getAWSImageUrl(
    "maunual/logo-invetailor.jpg"
  )}"/>
</div></td>
</tr></table>
</td>
<td></td></tr>
</table></td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t20" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="500" class="t19" style="padding:0 0 15px 0;">
<![endif]-->
<!--[if !mso]>-->
<td class="t19" style="width:500px;padding:0 0 15px 0;">
<!--<![endif]-->
<p class="t1" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t0" style="margin:0;Margin:0;font-weight:bold;mso-line-height-rule:exactly;">BESTILLINGSINFO</span></p>
</td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t23" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="500" class="t22" style="padding:0 0 22px 0;">
<![endif]-->
<!--[if !mso]>-->
<td class="t22" style="width:500px;padding:0 0 22px 0;">
<!--<![endif]-->
<p class="t21" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
    ORDRE ID: <strong>${emailData.orderId}</strong></p>

    <p class="t21" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
        ORIGINAL TOTAL INKL. MOMS: <strong>${
          emailData.originalPrice
        }</strong></p>
  <p class="t21" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
        RABAT BELØB: <strong>${emailData.discountedAmount}</strong></p>
  <p class="t21" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
        SUBTOTAL EX MOMS: <strong>${emailData.subTotalWithoutTax}</strong></p>
  <p class="t21" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
        25% MOMS: <strong>${emailData.tax}</strong></p>
  <p class="t21" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
        TOTAL INKL. MOMS: <strong>${emailData.totalPrice}</strong></p>

        <p class="t21" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
            BESTILLINGSSTATUS: <strong>${emailData.orderStatus}</strong></p>
        
            <p class="t21" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                BETALINGSSTATUS: <strong>${
                  emailData.paymentStatus ? "Betalt" : "Mislykkedes"
                }</strong></p>

    
    

    



</p></td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t26" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="500" class="t25" style="padding:0 0 22px 0;">
<![endif]-->
<!--[if !mso]>-->
</tr></table>
</td></tr> <tr><td align="left">
<table class="t32" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="250" class="t31" style="background-color:#181818;overflow:hidden;text-align:center;line-height:44px;mso-line-height-rule:exactly;mso-text-raise:10px;border-radius:44px 44px 44px 44px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t31" style="background-color:#181818;overflow:hidden;width:250px;text-align:center;line-height:44px;mso-line-height-rule:exactly;mso-text-raise:10px;border-radius:44px 44px 44px 44px;">
<!--<![endif]-->
</td>
</tr></table>
</td></tr>
<tr><td align="center">
<table class="t59" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
    <!-- Product loop from here -->
${emailData?.products?.map((product) => {
  return `
            <tr>
<!--[if mso]>
<td width="500" class="t58" style="background-color:#F0F0F0;padding:20px 20px 20px 20px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t58" style="background-color:#F0F0F0;width:460px;padding:20px 20px 20px 20px;">
<!--<![endif]-->
<table class="t57" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="middle">
<tr class="t56"><td></td><td class="t39" width="112.36763" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t38" style="width:100%;"><tr>
<td class="t35" style="width:10px;" width="10"></td><td class="t36"><div style="font-size:0px;">
    <img class="t34" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="92.36763236763237" height="120.28125" alt=""
    src="${
      product?.productImage
    }"/></div></td><td class="t37" style="width:10px;" width="10"></td>
</tr></table>
</td><td class="t55" width="387.63237" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t54" style="width:100%;"><tr>
<td class="t51" style="width:10px;" width="10"></td><td class="t52"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t42" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="367.6323676323676" class="t41" style="padding:0 0 0 10px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t41" style="width:357.63px;padding:0 0 0 10px;">
<!--<![endif]-->
<h1 class="t40" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">${
    product?.productTitle
  }</h1></td>
</tr></table>
</td></tr><tr><td><div class="t43" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t46" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="367.6323676323676" class="t45" style="padding:0 0 0 10px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t45" style="width:357.63px;padding:0 0 0 10px;">
<!--<![endif]-->
<h1 class="t44" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">
    <strong>KØN:</strong> ${product?.productGender} <br/><br/>
<strong>FARVE:</strong> ${product?.productColor}<br/><br/>
<strong>BESKRIVELSE:</strong> ${product?.productDescription}<br/>
</h1></td>
</tr></table>
</td></tr><tr><td><div class="t48" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t50" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="367.6323676323676" class="t49" style="border-top:1px solid #CCCCCC;padding:15px 0 0 10px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t49" style="border-top:1px solid #CCCCCC;width:357.63px;padding:15px 0 0 10px;">
<!--<![endif]-->
<h1 class="t47" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">    <strong>STOF</strong> <br/>
        Stof-id: ${product?.fabricId}<br/>
        Stoffets navn: ${product?.fabricName}<br/>
        ${product?.fabrics?.map((fabric) => `${fabric}<br/>`)?.join("")}
          <br />
    <strong>DESIGN</strong><br/>
    ${product?.design?.map((design) => `${design}<br/>`)?.join("")}</h1></td>
</tr></table>
</td></tr></table></td><td class="t53" style="width:10px;" width="10"></td>
</tr></table>
</td>
<td></td></tr>
</table></td>
</tr>
<tr>
</table>
</td></tr>
            `;
})}
<tr><td align="center" style="background-color: #f8f8f8;">
<table class="t127" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="500" class="t126" style="background-color:#F0F0F0;padding:40px 40px 40px 40px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t126" style="background-color:#F0F0F0;width:420px;padding:40px 40px 40px 40px;">
<!--<![endif]-->
<table class="t125" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t124"><td></td><td class="t92" width="210" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t90" style="width:100%;"><tr>
<td class="t89" style="padding:0 5px 0 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t78" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="204.99999999999997" class="t77">
<![endif]-->
<!--[if !mso]>-->
<td class="t77" style="width:205px;">
<!--<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t63" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="204.99999999999997" class="t62">
<![endif]-->
<!--[if !mso]>-->
<td class="t62" style="width:205px;">
<!--<![endif]-->
<h1 class="t61" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">LEVERING ADRESSE</h1></td>
</tr></table>
</td></tr><tr><td><div class="t64" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t67" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="204.99999999999997" class="t66">
<![endif]-->
<!--[if !mso]>-->
<td class="t66" style="width:205px;">
<!--<![endif]-->
<p class="t65" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">${
    emailData?.shippingFirstName
  }${
    emailData?.shippingMiddleName ? ` ${emailData?.shippingMiddleName} ` : " "
  }${emailData?.shippingLastName}</p><br /><br />
<p class="t65" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">${
    emailData?.shippingCompanyName
  }</p></td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t70" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="204.99999999999997" class="t69">
<![endif]-->
<!--[if !mso]>-->
<td class="t69" style="width:205px;">
<!--<![endif]-->
<p class="t68" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">${
    emailData?.shippingAddressLine1
  }</p></td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t73" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="204.99999999999997" class="t72">
<![endif]-->
<!--[if !mso]>-->
<td class="t72" style="width:205px;">
<!--<![endif]-->
${
  emailData?.billingAddressLine2
    ? `<p class="t71" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">${emailData?.shippingAddressLine2}</p>`
    : ""
}</td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t76" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="204.99999999999997" class="t75">
<![endif]-->
<!--[if !mso]>-->
<td class="t75" style="width:205px;">
<!--<![endif]-->
<p class="t74" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">${
    emailData?.shippingCity
  } ${emailData?.shippingPostalCode}</p><br /><br />
<p class="t74" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">${
    emailData?.shippingPhoneCode
  } ${emailData?.shippingPhoneNumber}</p></td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td></tr>
</table></td>
</tr></table>
<!--[if !mso]>-->
<div class="t91" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;&nbsp;</div>
<!--<![endif]-->
</td><td class="t123" width="210" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t122" style="width:100%;"><tr>
<td class="t121" style="padding:0 0 0 5px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t110" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="204.99999999999997" class="t109">
<![endif]-->
<!--[if !mso]>-->
<td class="t109" style="width:205px;">
<!--<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t95" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="204.99999999999997" class="t94">
<![endif]-->
<!--[if !mso]>-->
<td class="t94" style="width:205px;">
<!--<![endif]-->
<h1 class="t93" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">FAKTURERINGSADRESSE</h1></td>
</tr></table>
</td></tr><tr><td><div class="t96" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t99" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="204.99999999999997" class="t98">
<![endif]-->
<!--[if !mso]>-->
<td class="t98" style="width:205px;">
<!--<![endif]-->
<p class="t97" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">${
    emailData?.billingFirstName
  }${emailData?.billingMiddleName ? ` ${emailData?.billingMiddleName} ` : " "}${
    emailData?.billingLastName
  }</p><br /><br />
<p class="t97" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">${
    emailData?.billingCompanyName
  }</p>
</td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t102" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="204.99999999999997" class="t101">
<![endif]-->
<!--[if !mso]>-->
<td class="t101" style="width:205px;">
<!--<![endif]-->
<p class="t100" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">${
    emailData?.billingAddressLine1
  }</p></td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t105" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="204.99999999999997" class="t104">
<![endif]-->
<!--[if !mso]>-->
<td class="t104" style="width:205px;">
<!--<![endif]-->
${
  emailData?.billingAddressLine2
    ? `<p class="t103" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">${emailData?.billingAddressLine2}</p>`
    : ""
}
</td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t108" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="204.99999999999997" class="t107">
<![endif]-->
<!--[if !mso]>-->
<td class="t107" style="width:205px;">
<!--<![endif]-->
<p class="t106" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">${
    emailData?.billingCity
  } ${emailData?.billingPostalCode}</p><br /><br />
<p class="t106" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">${
    emailData?.billingPhoneCode
  } ${emailData?.billingPhoneNumber}</p></td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td></tr>
</table></td>
</tr></table>
</td>
<td></td></tr>
</table></td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t178" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="600" class="t177" style="background-color:#242424;padding:48px 50px 48px 50px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t177" style="background-color:#242424;width:500px;padding:48px 50px 48px 50px;">
<!--<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t133" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="500" class="t132">
<![endif]-->
<!--[if !mso]>-->
<td class="t132" style="width:500px;">
<!--<![endif]-->
<p class="t131" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">Vil du have opdateringer via flere platforme?</p></td>
</tr></table>
</td></tr><tr><td align="center">
<table class="t167" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="500" class="t166" style="padding:10px 0 44px 0;">
<![endif]-->
<!--[if !mso]>-->
<td class="t166" style="width:500px;padding:10px 0 44px 0;">
<!--<![endif]-->
<table class="t165" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t164"><td></td><td class="t139" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t138" style="width:100%;"><tr>
<td class="t135" style="width:10px;" width="10"></td><td class="t136"><div style="font-size:0px;"><img class="t134" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="${getAWSImageUrl(
    "maunual/twitter-light.png"
  )}"/></div></td><td class="t137" style="width:10px;" width="10"></td>
</tr></table>
</td><td class="t145" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t144" style="width:100%;"><tr>
<td class="t141" style="width:10px;" width="10"></td><td class="t142"><div style="font-size:0px;"><img class="t140" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="${getAWSImageUrl(
    "maunual/facebook-light.png"
  )}"/></div></td><td class="t143" style="width:10px;" width="10"></td>
</tr></table>
</td><td class="t151" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t150" style="width:100%;"><tr>
<td class="t147" style="width:10px;" width="10"></td><td class="t148"><div style="font-size:0px;"><img class="t146" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="${getAWSImageUrl(
    "maunual/youtube-light.png"
  )}"/></div></td><td class="t149" style="width:10px;" width="10"></td>
</tr></table>
</td><td class="t157" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t156" style="width:100%;"><tr>
<td class="t153" style="width:10px;" width="10"></td><td class="t154"><div style="font-size:0px;"><img class="t152" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="${getAWSImageUrl(
    "maunual/p-social-light.png"
  )}"/></div></td><td class="t155" style="width:10px;" width="10"></td>
</tr></table>
</td><td class="t163" width="44" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t162" style="width:100%;"><tr>
<td class="t159" style="width:10px;" width="10"></td><td class="t160"><div style="font-size:0px;"><img class="t158" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="24" height="24" alt="" src="${getAWSImageUrl(
    "maunual/instagram-light.png"
  )}"/></div></td><td class="t161" style="width:10px;" width="10"></td>
</tr></table>
</td>
<td></td></tr>
</table></td>
</tr></table>
</td></tr><tr><td align="center">
</td></tr><tr><td align="center">
<table class="t176" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
<tr>
<!--[if mso]>
<td width="500" class="t175">
<![endif]-->
<!--[if !mso]>-->
<td class="t175" style="width:500px;">
<!--<![endif]-->
<p class="t174" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;"><a class="t171" href="#" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;" target="_blank">Afmeld</a>&nbsp; •&nbsp; <a class="t172" href="#" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;" target="_blank">Privatlivspolitik</a>&nbsp; •&nbsp; <a class="t173" href="#" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#878787;mso-line-height-rule:exactly;" target="_blank">Kontakt os</a></p></td>
</tr></table>
</td></tr></table></td>
</tr></table>
</td></tr></table></td></tr></table></div><div class="gmail-mobile-forced-width" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
</div></body>
</html>
          `;
};

module.exports.generateEmailHtmlCertificateOrderSuccess = (
  emailData,
  messages
) => {
  return `
    <!--
* This email was built using Tabular.
* For more information, visit https://tabular.email
-->
<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
    <title></title>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <!--[if !mso]>-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="x-apple-disable-message-reformatting" content="" />
    <meta content="target-densitydpi=device-dpi" name="viewport" />
    <meta content="true" name="HandheldFriendly" />
    <meta content="width=device-width" name="viewport" />
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
    <style type="text/css">
        table {
            border-collapse: separate;
            table-layout: fixed;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt
        }

        table td {
            border-collapse: collapse
        }

        .ExternalClass {
            width: 100%
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%
        }

        .gmail-mobile-forced-width {
            display: none;
            display: none !important;
        }

        body,
        a,
        li,
        p,
        h1,
        h2,
        h3 {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        html {
            -webkit-text-size-adjust: none !important
        }

        body,
        #innerTable {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }

        #innerTable img+div {
            display: none;
            display: none !important
        }

        img {
            Margin: 0;
            padding: 0;
            -ms-interpolation-mode: bicubic
        }

        h1,
        h2,
        h3,
        p,
        a {
            line-height: inherit;
            overflow-wrap: normal;
            white-space: normal;
            word-break: break-word
        }

        a {
            text-decoration: none
        }

        h1,
        h2,
        h3,
        p {
            min-width: 100% !important;
            width: 100% !important;
            max-width: 100% !important;
            display: inline-block !important;
            border: 0;
            padding: 0;
            margin: 0
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important
        }

        u+#body a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
        }

        a[href^="mailto"],
        a[href^="tel"],
        a[href^="sms"] {
            color: inherit;
            text-decoration: none
        }
    </style>
    <style type="text/css">
        @media (min-width: 481px) {
            .hd {
                display: none !important
            }
        }
    </style>
    <style type="text/css">
        @media (max-width: 480px) {
            .hm {
                display: none !important
            }
        }
    </style>
    <style type="text/css">
        @media (max-width: 480px) {

            .t129,
            .t132,
            .t16,
            .t166,
            .t169,
            .t175,
            .t177,
            .t19,
            .t22,
            .t25,
            .t28 {
                width: 420px !important
            }

            .t128 {
                mso-line-height-alt: 0px !important;
                line-height: 0 !important;
                display: none !important
            }

            .t129 {
                padding-left: 30px !important;
                padding-bottom: 40px !important;
                padding-right: 30px !important
            }

            .t19 {
                padding-bottom: 20px !important
            }

            .t18 {
                line-height: 28px !important;
                font-size: 26px !important;
                letter-spacing: -1.04px !important
            }

            .t177 {
                padding: 40px 30px !important
            }

            .t121,
            .t41,
            .t45,
            .t49 {
                padding-left: 0 !important
            }

            .t166 {
                padding-bottom: 36px !important
            }

            .t164 {
                text-align: center !important
            }

            .t135,
            .t137,
            .t141,
            .t143,
            .t147,
            .t149,
            .t153,
            .t155,
            .t159,
            .t161,
            .t35,
            .t37,
            .t51,
            .t53 {
                display: revert !important
            }

            .t124,
            .t125,
            .t91 {
                display: block !important
            }

            .t13,
            .t139,
            .t145,
            .t151,
            .t157,
            .t163,
            .t9 {
                vertical-align: top !important
            }

            .t58 {
                width: 380px !important
            }

            .t56 {
                text-align: left !important
            }

            .t39,
            .t55 {
                vertical-align: middle !important
            }

            .t14 {
                text-align: right !important
            }

            .t11 {
                padding-bottom: 50px !important
            }

            .t2,
            .t5 {
                width: 345.33px !important
            }

            .t31 {
                width: 353px !important
            }

            .t41,
            .t45,
            .t49 {
                width: 303.7px !important
            }

            .t126 {
                width: 340px !important
            }

            .t124 {
                text-align: left !important
            }

            .t91 {
                mso-line-height-alt: 15px !important;
                line-height: 15px !important
            }

            .t123,
            .t92 {
                vertical-align: top !important;
                display: inline-block !important;
                width: 100% !important;
                max-width: 800px !important
            }

            .t89 {
                padding-bottom: 15px !important;
                padding-right: 0 !important
            }

            .t109,
            .t119,
            .t77,
            .t87 {
                width: 800px !important
            }

            .t101,
            .t104,
            .t107,
            .t112,
            .t116,
            .t62,
            .t66,
            .t69,
            .t72,
            .t75,
            .t80,
            .t84,
            .t94,
            .t98 {
                width: 600px !important
            }
        }
    </style>
    <style type="text/css">
        @media (max-width: 480px) {
            [class~="x_t128"] {
                mso-line-height-alt: 0px !important;
                line-height: 0px !important;
                display: none !important;
            }

            [class~="x_t129"] {
                padding-left: 30px !important;
                padding-bottom: 40px !important;
                padding-right: 30px !important;
                width: 420px !important;
            }

            [class~="x_t19"] {
                padding-bottom: 20px !important;
                width: 420px !important;
            }

            [class~="x_t18"] {
                line-height: 28px !important;
                font-size: 26px !important;
                letter-spacing: -1.04px !important;
            }

            [class~="x_t177"] {
                padding-left: 30px !important;
                padding-top: 40px !important;
                padding-bottom: 40px !important;
                padding-right: 30px !important;
                width: 420px !important;
            }

            [class~="x_t132"] {
                width: 420px !important;
            }

            [class~="x_t166"] {
                padding-bottom: 36px !important;
                width: 420px !important;
            }

            [class~="x_t164"] {
                text-align: center !important;
            }

            [class~="x_t135"] {
                display: revert !important;
            }

            [class~="x_t137"] {
                display: revert !important;
            }

            [class~="x_t139"] {
                vertical-align: top !important;
            }

            [class~="x_t159"] {
                display: revert !important;
            }

            [class~="x_t161"] {
                display: revert !important;
            }

            [class~="x_t163"] {
                vertical-align: top !important;
            }

            [class~="x_t153"] {
                display: revert !important;
            }

            [class~="x_t155"] {
                display: revert !important;
            }

            [class~="x_t157"] {
                vertical-align: top !important;
            }

            [class~="x_t147"] {
                display: revert !important;
            }

            [class~="x_t149"] {
                display: revert !important;
            }

            [class~="x_t151"] {
                vertical-align: top !important;
            }

            [class~="x_t141"] {
                display: revert !important;
            }

            [class~="x_t143"] {
                display: revert !important;
            }

            [class~="x_t145"] {
                vertical-align: top !important;
            }

            [class~="x_t175"] {
                width: 420px !important;
            }

            [class~="x_t169"] {
                width: 420px !important;
            }

            [class~="x_t58"] {
                width: 380px !important;
            }

            [class~="x_t56"] {
                text-align: left !important;
            }

            [class~="x_t35"] {
                display: revert !important;
            }

            [class~="x_t37"] {
                display: revert !important;
            }

            [class~="x_t39"] {
                vertical-align: middle !important;
            }

            [class~="x_t16"] {
                width: 420px !important;
            }

            [class~="x_t14"] {
                text-align: right !important;
            }

            [class~="x_t13"] {
                vertical-align: top !important;
            }

            [class~="x_t11"] {
                padding-bottom: 50px !important;
            }

            [class~="x_t9"] {
                vertical-align: top !important;
            }

            [class~="x_t28"] {
                width: 420px !important;
            }

            [class~="x_t5"] {
                width: 345.33px !important;
            }

            [class~="x_t2"] {
                width: 345.33px !important;
            }

            [class~="x_t22"] {
                width: 420px !important;
            }

            [class~="x_t25"] {
                width: 420px !important;
            }

            [class~="x_t31"] {
                width: 353px !important;
            }

            [class~="x_t51"] {
                display: revert !important;
            }

            [class~="x_t53"] {
                display: revert !important;
            }

            [class~="x_t55"] {
                vertical-align: middle !important;
            }

            [class~="x_t49"] {
                padding-left: 0px !important;
                width: 303.7px !important;
            }

            [class~="x_t45"] {
                padding-left: 0px !important;
                width: 303.7px !important;
            }

            [class~="x_t126"] {
                width: 340px !important;
            }

            [class~="x_t125"] {
                display: block !important;
            }

            [class~="x_t124"] {
                display: block !important;
                text-align: left !important;
            }

            [class~="x_t91"] {
                mso-line-height-alt: 15px !important;
                line-height: 15px !important;
                display: block !important;
            }

            [class~="x_t92"] {
                vertical-align: top !important;
                display: inline-block !important;
                width: 100% !important;
                max-width: 800px !important;
            }

            [class~="x_t89"] {
                padding-bottom: 15px !important;
                padding-right: 0px !important;
            }

            [class~="x_t123"] {
                vertical-align: top !important;
                display: inline-block !important;
                width: 100% !important;
                max-width: 800px !important;
            }

            [class~="x_t121"] {
                padding-left: 0px !important;
            }

            [class~="x_t41"] {
                padding-left: 0px !important;
                width: 303.7px !important;
            }

            [class~="x_t87"] {
                width: 800px !important;
            }

            [class~="x_t80"] {
                width: 600px !important;
            }

            [class~="x_t84"] {
                width: 600px !important;
            }

            [class~="x_t77"] {
                width: 800px !important;
            }

            [class~="x_t62"] {
                width: 600px !important;
            }

            [class~="x_t66"] {
                width: 600px !important;
            }

            [class~="x_t69"] {
                width: 600px !important;
            }

            [class~="x_t72"] {
                width: 600px !important;
            }

            [class~="x_t75"] {
                width: 600px !important;
            }

            [class~="x_t109"] {
                width: 800px !important;
            }

            [class~="x_t94"] {
                width: 600px !important;
            }

            [class~="x_t98"] {
                width: 600px !important;
            }

            [class~="x_t101"] {
                width: 600px !important;
            }

            [class~="x_t104"] {
                width: 600px !important;
            }

            [class~="x_t107"] {
                width: 600px !important;
            }

            [class~="x_t119"] {
                width: 800px !important;
            }

            [class~="x_t112"] {
                width: 600px !important;
            }

            [class~="x_t116"] {
                width: 600px !important;
            }
        }
    </style>
    <!--[if !mso]>-->
    <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;700;800&amp;display=swap"
        rel="stylesheet" type="text/css" />
    <!--<![endif]-->
    <!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body id="body" class="t181" style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;">
    <div class="t180" style="background-color:#242424;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center">
            <tr>
                <td class="t179"
                    style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#242424;"
                    valign="top" align="center">
                    <!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#242424"/>
</v:background>
<![endif]-->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"
                        id="innerTable">
                        <tr>
                            <td>
                                <div class="t128"
                                    style="mso-line-height-rule:exactly;mso-line-height-alt:45px;line-height:45px;font-size:1px;display:block;">
                                    &nbsp;&nbsp;</div>
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <table class="t130" role="presentation" cellpadding="0" cellspacing="0"
                                    style="Margin-left:auto;Margin-right:auto;">
                                    <tr>
                                        <!--[if mso]>
<td width="600" class="t129" style="background-color:#F8F8F8;padding:0 50px 60px 50px;">
<![endif]-->
                                        <!--[if !mso]>-->
                                        <td class="t129"
                                            style="background-color:#F8F8F8;width:500px;padding:0 50px 60px 50px;">
                                            <!--<![endif]-->
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                style="width:100% !important;">
                                                <tr>
                                                    <td align="center">
                                                        <table class="t17" role="presentation" cellpadding="0"
                                                            cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
                                                            <tr>
                                                                <!--[if mso]>
<td width="500" class="t16">
<![endif]-->
                                                                <!--[if !mso]>-->
                                                                <td class="t16" style="width:500px;">
                                                                    <!--<![endif]-->
                                                                    <table class="t15" role="presentation"
                                                                        cellpadding="0" cellspacing="0" align="right"
                                                                        valign="top">
                                                                        <tr class="t14">
                                                                            <td></td>
                                                                            <td class="t9" width="370" valign="top">
                                                                                <table role="presentation" width="100%"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    class="t8" style="width:100%;">
                                                                                    <tr>
                                                                                        <td class="t7"
                                                                                            style="padding:35px 0 0 0;">
                                                                                            <table role="presentation"
                                                                                                width="100%"
                                                                                                cellpadding="0"
                                                                                                cellspacing="0"
                                                                                                style="width:100% !important;">
                                                                                                <tr>
                                                                                                    <td align="center">
                                                                                                        <table
                                                                                                            class="t3"
                                                                                                            role="presentation"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            style="Margin-left:auto;Margin-right:auto;">
                                                                                                            <tr>
                                                                                                                <!--[if mso]>
<td width="370" class="t2">
<![endif]-->
                                                                                                                <!--[if !mso]>-->
                                                                                                                <td class="t2"
                                                                                                                    style="width:370px;">
                                                                                                                    <!--<![endif]-->
                                                                                                                    <p class="t1"
                                                                                                                        style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                                                                        <span
                                                                                                                            class="t0"
                                                                                                                            style="margin:0;Margin:0;font-weight:bold;mso-line-height-rule:exactly;">BRUGERDETALJER</span>
                                                                                                                    </p>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="center">
                                                                                                        <table
                                                                                                            class="t6"
                                                                                                            role="presentation"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            style="Margin-left:auto;Margin-right:auto;">
                                                                                                            <tr>
                                                                                                                <!--[if mso]>
<td width="370" class="t5" style="padding:0 0 22px 0;">
<![endif]-->
                                                                                                                <!--[if !mso]>-->
                                                                                                                <td class="t5"
                                                                                                                    style="width:370px;padding:0 0 22px 0;">
                                                                                                                    <!--<![endif]-->
                                                                                                                    <p class="t4"
                                                                                                                        style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                                                                        ${
                                                                                                                          emailData.userFullName
                                                                                                                        }
                                                                                                                    </p>
                                                                                                                    <p class="t4"
                                                                                                                        style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                                                                         ${
                                                                                                                           emailData.userEmail
                                                                                                                         }
                                                                                                                    </p>
                                                                                                                    <p class="t4"
                                                                                                                        style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                                                                        ${
                                                                                                                          emailData.userPhoneCode
                                                                                                                        } ${
    emailData.userMobileNumber
  }
                                                                                                                    </p>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="t13" width="130" valign="top">
                                                                                <table role="presentation" width="100%"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    class="t12" style="width:100%;">
                                                                                    <tr>
                                                                                        <td class="t11"
                                                                                            style="padding:0;">
                                                                                            <div style="font-size:0px;">
                                                                                                <img class="t10"
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width="70"
                                                                                                    height="auto" alt=""
                                                                                                    src="${getAWSImageUrl(
                                                                                                      "maunual/logo-invetailor.jpg"
                                                                                                    )}" />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <table class="t20" role="presentation" cellpadding="0"
                                                            cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
                                                            <tr>
                                                                <!--[if mso]>
<td width="500" class="t19" style="padding:0 0 15px 0;">
<![endif]-->
                                                                <!--[if !mso]>-->
                                                                <td class="t19" style="width:500px;padding:0 0 15px 0;">
                                                                    <!--<![endif]-->
                                                                    <p class="t1"
                                                                        style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        <span class="t0"
                                                                            style="margin:0;Margin:0;font-weight:bold;mso-line-height-rule:exactly;">BESTILLINGSINFO</span></p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <table class="t23" role="presentation" cellpadding="0"
                                                            cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
                                                            <tr>
                                                                <!--[if mso]>
<td width="500" class="t22" style="padding:0 0 22px 0;">
<![endif]-->
                                                                <!--[if !mso]>-->
                                                                <td class="t22" style="width:500px;padding:0 0 22px 0;">
                                                                    <!--<![endif]-->
                                                                    <p class="t21"
                                                                        style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        ORDRE ID:
                                                                        <strong>${
                                                                          emailData.orderId
                                                                        }</strong></p>

                                                                    <p class="t21"
                                                                        style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        ORIGINAL TOTAL INKL. MOMS: <strong>${
                                                                          emailData.originalPrice
                                                                        }</strong></p>

                                                                    <p class="t21"
                                                                        style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        RABAT BELØB: <strong>${
                                                                          emailData.discountedAmount
                                                                        }</strong></p>

                                                                    <p class="t21"
                                                                        style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        SUBTOTAL EX MOMS: <strong>${
                                                                          emailData.subTotalWithoutTax
                                                                        }</strong></p>
                                                                    <p class="t21"
                                                                        style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        25% MOMS: <strong>${
                                                                          emailData.tax
                                                                        }</strong></p>
                                                                    <p class="t21"
                                                                        style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        TOTAL INKL. MOMS: <strong>${
                                                                          emailData.totalPrice
                                                                        }</strong></p>
                                                                    <p class="t21"
                                                                        style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                        SIKKERHEDSPIN: <strong>${
                                                                          emailData.securityPin
                                                                        }</strong></p>







                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <table class="t26" role="presentation" cellpadding="0"
                                                            cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
                                                            <tr>
                                                                <!--[if mso]>
<td width="500" class="t25" style="padding:0 0 22px 0;">
<![endif]-->
                                                                <!--[if !mso]>-->
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="left">
                                                        <table class="t32" role="presentation" cellpadding="0"
                                                            cellspacing="0" style="Margin-right:auto;">
                                                            <tr>
                                                                <!--[if mso]>
<td width="250" class="t31" style="background-color:#181818;overflow:hidden;text-align:center;line-height:44px;mso-line-height-rule:exactly;mso-text-raise:10px;border-radius:44px 44px 44px 44px;">
<![endif]-->
                                                                <!--[if !mso]>-->
                                                                <td class="t31"
                                                                    style="background-color:#181818;overflow:hidden;width:250px;text-align:center;line-height:44px;mso-line-height-rule:exactly;mso-text-raise:10px;border-radius:44px 44px 44px 44px;">
                                                                    <!--<![endif]-->
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <table class="t59" role="presentation" cellpadding="0"
                                                            cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
                                                            <!-- Product loop from here -->
                                                            
                                                            ${emailData?.products?.map(
                                                              (product) => {
                                                                return `<tr>
                                                                <!--[if mso]>
<td width="500" class="t58" style="background-color:#F0F0F0;padding:20px 20px 20px 20px;">
<![endif]-->
                                                                <!--[if !mso]>-->
                                                                <td class="t58"
                                                                    style="background-color:#F0F0F0;width:460px;padding:20px 20px 20px 20px;">
                                                                    <!--<![endif]-->
                                                                    <table class="t57" role="presentation"
                                                                        cellpadding="0" cellspacing="0" align="left"
                                                                        valign="middle">
                                                                        <tr class="t56">
                                                                            <td></td>
                                                                            <td class="t39" width="112.36763"
                                                                                valign="top">
                                                                                <table role="presentation" width="100%"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    class="t38" style="width:100%;">
                                                                                    <tr>
                                                                                        <td class="t35"
                                                                                            style="width:10px;"
                                                                                            width="10"></td>
                                                                                        <td class="t36">
                                                                                            <div style="font-size:0px;">
                                                                                                <img class="t34"
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width="92.36763236763237"
                                                                                                    height="120.28125"
                                                                                                    alt=""
                                                                                                    src="${
                                                                                                      product?.productImage
                                                                                                    }" />
                                                                                            </div>
                                                                                        </td>
                                                                                        <td class="t37"
                                                                                            style="width:10px;"
                                                                                            width="10"></td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="t55" width="387.63237"
                                                                                valign="middle">
                                                                                <table role="presentation" width="100%"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    class="t54" style="width:100%;">
                                                                                    <tr>
                                                                                        <td class="t51"
                                                                                            style="width:10px;"
                                                                                            width="10"></td>
                                                                                        <td class="t52">
                                                                                            <table role="presentation"
                                                                                                width="100%"
                                                                                                cellpadding="0"
                                                                                                cellspacing="0"
                                                                                                style="width:100% !important;">
                                                                                                <tr>
                                                                                                    <td align="center">
                                                                                                        <table
                                                                                                            class="t42"
                                                                                                            role="presentation"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            style="Margin-left:auto;Margin-right:auto;">
                                                                                                            <tr>
                                                                                                                <!--[if mso]>
<td width="367.6323676323676" class="t41" style="padding:0 0 0 10px;">
<![endif]-->
                                                                                                                <!--[if !mso]>-->
                                                                                                                <td class="t41"
                                                                                                                    style="width:357.63px;padding:0 0 0 10px;">
                                                                                                                    <!--<![endif]-->
                                                                                                                    <h1 class="t40"
                                                                                                                        style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                              ${
                                                                product?.productTitle
                                                              }
                                                                                                                    </h1>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td>
                                                                                                        <div class="t43"
                                                                                                            style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">
                                                                                                            &nbsp;&nbsp;
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="center">
                                                                                                        <table
                                                                                                            class="t46"
                                                                                                            role="presentation"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            style="Margin-left:auto;Margin-right:auto;">
                                                                                                            <tr>
                                                                                                                <!--[if mso]>
<td width="367.6323676323676" class="t45" style="padding:0 0 0 10px;">
<![endif]-->
                                                                                                                <!--[if !mso]>-->
                                                                                                                <td class="t45"
                                                                                                                    style="width:357.63px;padding:0 0 0 10px;">
                                                                                                                    <!--<![endif]-->
                                                                                                                    <h1 class="t44"
                                                                                                                        style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A !important;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                                                                        <strong style="color: #1a1a1a">MÆNGDE:</strong>
                                                                                                                        <span style="color: #1a1a1a">${
                                                                                                                          product?.productQuantity
                                                                                                                        }</span><br />
                                                                                                                        <strong style="color: #1a1a1a">FARVE:</strong>
                                                                                                                        <span style="color: #1a1a1a">${
                                                                                                                          product?.productColor
                                                                                                                        }</span><br />
                                                                                                                        <strong style="color: #1a1a1a">BESKRIVELSE:</strong>
                                                                                                                        <span style="color: #1a1a1a">${
                                                                                                                          product?.productDescription
                                                                                                                        }</span><br />
                                                                                                                    </h1>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                        <td class="t53"
                                                                                            style="width:10px;"
                                                                                            width="10"></td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>`;
                                                              }
                                                            )}



                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <table class="t178" role="presentation" cellpadding="0" cellspacing="0"
                                    style="Margin-left:auto;Margin-right:auto;">
                                    <tr>
                                        <!--[if mso]>
<td width="600" class="t177" style="background-color:#242424;padding:48px 50px 48px 50px;">
<![endif]-->
                                        <!--[if !mso]>-->
                                        <td class="t177"
                                            style="background-color:#242424;width:500px;padding:48px 50px 48px 50px;">
                                            <!--<![endif]-->
                                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                                                style="width:100% !important;">
                                                <tr>
                                                    <td align="center">
                                                        <table class="t133" role="presentation" cellpadding="0"
                                                            cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
                                                            <tr>
                                                                <!--[if mso]>
<td width="500" class="t132">
<![endif]-->
                                                                <!--[if !mso]>-->
                                                                <td class="t132" style="width:500px;">
                                                                    <!--<![endif]-->
                                                                    <p class="t131"
                                                                        style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:-0.9px;direction:ltr;color:#757575;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                        Vil du have opdateringer via flere platforme?</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <table class="t167" role="presentation" cellpadding="0"
                                                            cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
                                                            <tr>
                                                                <!--[if mso]>
<td width="500" class="t166" style="padding:10px 0 44px 0;">
<![endif]-->
                                                                <!--[if !mso]>-->
                                                                <td class="t166"
                                                                    style="width:500px;padding:10px 0 44px 0;">
                                                                    <!--<![endif]-->
                                                                    <table class="t165" role="presentation"
                                                                        cellpadding="0" cellspacing="0" align="center"
                                                                        valign="top">
                                                                        <tr class="t164">
                                                                            <td></td>
                                                                            <td class="t139" width="44" valign="top">
                                                                                <table role="presentation" width="100%"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    class="t138" style="width:100%;">
                                                                                    <tr>
                                                                                        <td class="t135"
                                                                                            style="width:10px;"
                                                                                            width="10"></td>
                                                                                        <td class="t136">
                                                                                            <div style="font-size:0px;">
                                                                                                <img class="t134"
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width="24"
                                                                                                    height="24" alt=""
                                                                                                    src="${getAWSImageUrl(
                                                                                                      "maunual/twitter-light.png"
                                                                                                    )}" />
                                                                                            </div>
                                                                                        </td>
                                                                                        <td class="t137"
                                                                                            style="width:10px;"
                                                                                            width="10"></td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="t145" width="44" valign="top">
                                                                                <table role="presentation" width="100%"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    class="t144" style="width:100%;">
                                                                                    <tr>
                                                                                        <td class="t141"
                                                                                            style="width:10px;"
                                                                                            width="10"></td>
                                                                                        <td class="t142">
                                                                                            <div style="font-size:0px;">
                                                                                                <img class="t140"
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width="24"
                                                                                                    height="24" alt=""
                                                                                                    src="${getAWSImageUrl(
                                                                                                      "maunual/facebook-light.png"
                                                                                                    )}" />
                                                                                            </div>
                                                                                        </td>
                                                                                        <td class="t143"
                                                                                            style="width:10px;"
                                                                                            width="10"></td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="t151" width="44" valign="top">
                                                                                <table role="presentation" width="100%"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    class="t150" style="width:100%;">
                                                                                    <tr>
                                                                                        <td class="t147"
                                                                                            style="width:10px;"
                                                                                            width="10"></td>
                                                                                        <td class="t148">
                                                                                            <div style="font-size:0px;">
                                                                                                <img class="t146"
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width="24"
                                                                                                    height="24" alt=""
                                                                                                    src="${getAWSImageUrl(
                                                                                                      "maunual/youtube-light.png"
                                                                                                    )}" />
                                                                                            </div>
                                                                                        </td>
                                                                                        <td class="t149"
                                                                                            style="width:10px;"
                                                                                            width="10"></td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="t157" width="44" valign="top">
                                                                                <table role="presentation" width="100%"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    class="t156" style="width:100%;">
                                                                                    <tr>
                                                                                        <td class="t153"
                                                                                            style="width:10px;"
                                                                                            width="10"></td>
                                                                                        <td class="t154">
                                                                                            <div style="font-size:0px;">
                                                                                                <img class="t152"
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width="24"
                                                                                                    height="24" alt=""
                                                                                                    src="${getAWSImageUrl(
                                                                                                      "maunual/p-social-light.png"
                                                                                                    )}" />
                                                                                            </div>
                                                                                        </td>
                                                                                        <td class="t155"
                                                                                            style="width:10px;"
                                                                                            width="10"></td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td class="t163" width="44" valign="top">
                                                                                <table role="presentation" width="100%"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    class="t162" style="width:100%;">
                                                                                    <tr>
                                                                                        <td class="t159"
                                                                                            style="width:10px;"
                                                                                            width="10"></td>
                                                                                        <td class="t160">
                                                                                            <div style="font-size:0px;">
                                                                                                <img class="t158"
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width="24"
                                                                                                    height="24" alt=""
                                                                                                    src="${getAWSImageUrl(
                                                                                                      "maunual/instagram-light.png"
                                                                                                    )}" />
                                                                                            </div>
                                                                                        </td>
                                                                                        <td class="t161"
                                                                                            style="width:10px;"
                                                                                            width="10"></td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                            <td></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <table class="t176" role="presentation" cellpadding="0"
                                                            cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
                                                            <tr>
                                                                <!--[if mso]>
<td width="500" class="t175">
<![endif]-->
                                                                <!--[if !mso]>-->
                                                                <td class="t175" style="width:500px;">
                                                                    <!--<![endif]-->
                                                                    <p class="t174"
                                                                        style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                        <a class="t171" href="#"
                                                                            style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;"
                                                                            target="_blank">Afmeld</a>&nbsp;
                                                                        •&nbsp; <a class="t172"
                                                                            href="#"
                                                                            style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;"
                                                                            target="_blank">Privatlivspolitik</a>&nbsp;
                                                                        •&nbsp; <a class="t173"
                                                                            href="#"
                                                                            style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#878787;mso-line-height-rule:exactly;"
                                                                            target="_blank">Kontakt os</a></p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    <div class="gmail-mobile-forced-width" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    </div>
</body>

</html>
  `;
};

module.exports.generateEmailHtmlGiftCardOrderSuccess = (
  emailData,
  messages
) => {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <title>Hent gavekort</title>

    <style type="text/css">
      @media only screen and (min-width: 620px) {
        .u-row {
          width: 600px !important;
        }

        .u-row .u-col {
          vertical-align: top;
        }

        .u-row .u-col-50 {
          width: 300px !important;
        }

        .u-row .u-col-100 {
          width: 600px !important;
        }
      }

      @media only screen and (max-width: 620px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }

        .u-row {
          width: 100% !important;
        }

        .u-row .u-col {
          display: block !important;
          width: 100% !important;
          min-width: 320px !important;
          max-width: 100% !important;
        }

        .u-row .u-col > div {
          margin: 0 auto;
        }

        .u-row .u-col img {
          max-width: 100% !important;
        }
      }

      body {
        margin: 0;
        padding: 0;
      }

      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }

      p {
        margin: 0;
      }

      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors="true"] {
        color: inherit !important;
        text-decoration: none !important;
      }

      table,
      td {
        color: #000000;
      }
      #u_body a {
        color: #161a39;
        text-decoration: underline;
      }
    </style>

    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
  </head>

  <body
    class="clean-body u_body"
    style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #f9f9f9;
      color: #000000;
    "
  >
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table
      id="u_body"
      style="
        border-collapse: collapse;
        table-layout: fixed;
        border-spacing: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        vertical-align: top;
        min-width: 320px;
        margin: 0 auto;
        background-color: #f9f9f9;
        width: 100%;
      "
      cellpadding="0"
      cellspacing="0"
    >
      <tbody>
        <tr style="vertical-align: top">
          <td
            style="
              word-break: break-word;
              border-collapse: collapse !important;
              vertical-align: top;
            "
          >
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->

            <div
              class="u-row-container"
              style="padding: 0px; background-color: #f9f9f9"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #f9f9f9;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f9f9f9;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 15px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  height="0px"
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    border-spacing: 0;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    vertical-align: top;
                                    border-top: 1px solid #f9f9f9;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <tbody>
                                    <tr style="vertical-align: top">
                                      <td
                                        style="
                                          word-break: break-word;
                                          border-collapse: collapse !important;
                                          vertical-align: top;
                                          font-size: 0px;
                                          line-height: 0px;
                                          mso-line-height-rule: exactly;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <span>&#160;</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffffff;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 25px 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <img
                                        align="center"
                                        border="0"
                                        src="${getAWSImageUrl(
                                          emailData.logoImg
                                        )}"
                                        alt="Image"
                                        title="Image"
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 29%;
                                          max-width: 168.2px;
                                        "
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #927f58;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #161a39;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 35px 10px 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <img
                                        align="center"
                                        border="0"
                                        src="${getAWSImageUrl(
                                          emailData.giftIcon
                                        )}"
                                        alt="Image"
                                        title="Image"
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 10%;
                                          max-width: 58px;
                                        "
                                        width="58"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 10px 30px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 140%;
                                      text-align: center;
                                    "
                                  >
                                    <span
                                      style="
                                        font-size: 28px;
                                        line-height: 39.2px;
                                        color: #ffffff;
                                        font-family: Lato, sans-serif;
                                      "
                                      >Hent gavekort
                                    </span>
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffffff;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 40px 40px 30px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 18px;
                                        line-height: 25.2px;
                                        color: #666666;
                                      "
                                      >Hej,</span
                                    >
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                    &nbsp;
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                    &nbsp;
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 18px;
                                        line-height: 25.2px;
                                        color: #666666;
                                      "
                                      >Hent venligst gavekort, følg venligst nedenstående link:
                                    </span>
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 40px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <!--[if mso
                                  ]><style>
                                    .v-button {
                                      background: transparent !important;
                                    }
                                  </style><!
                                [endif]-->
                                <div align="left">
                                  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:51px; v-text-anchor:middle; width:205px;" arcsize="2%"  stroke="f" fillcolor="#927f58"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
                                  <a
                                    href="${getAWSImageUrl(emailData.pdf)}"
                                    target="_blank"
                                    class="v-button"
                                    download="gift-card"
                                    style="
                                      box-sizing: border-box;
                                      display: inline-block;
                                      text-decoration: none;
                                      -webkit-text-size-adjust: none;
                                      text-align: center;
                                      color: #ffffff;
                                      background-color: #927f58;
                                      border-radius: 1px;
                                      -webkit-border-radius: 1px;
                                      -moz-border-radius: 1px;
                                      width: auto;
                                      max-width: 100%;
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      word-wrap: break-word;
                                      mso-border-alt: none;
                                      font-size: 14px;
                                    "
                                  >
                                    <span
                                      style="
                                        display: block;
                                        padding: 15px 40px;
                                        line-height: 120%;
                                      "
                                      ><span
                                        style="
                                          font-size: 18px;
                                          line-height: 21.6px;
                                        "
                                        >Hent gavekort</span
                                      ></span
                                    >
                                  </a>
                                  <!--[if mso]></center></v:roundrect><![endif]-->
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 40px 40px 30px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              ></td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #927f58;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #927f58;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 20px 20px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-50"
                    style="
                      max-width: 320px;
                      min-width: 300px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 20px 20px 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 14px;
                                        line-height: 19.6px;
                                        color: #ecf0f1;
                                      "
                                      >Klerkegade 12, st. th. - 1308 København
                                      K</span
                                    >
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 14px;
                                        line-height: 19.6px;
                                        color: #ecf0f1;
                                      "
                                      >Tel: +45 31327890 · CVR: 31731542</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 0px 0px 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-50"
                    style="
                      max-width: 320px;
                      min-width: 300px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px 0px 0px 20px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 25px 10px 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div align="left">
                                  <div style="display: table; max-width: 187px">
                                    <!--[if (mso)|(IE)]><table width="187" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="left"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:187px;"><tr><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        width: 32px !important;
                                        height: 32px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 15px;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                          >
                                            <a
                                              href="#"
                                              title="Facebook"
                                              target="_blank"
                                            >
                                              <img
                                                src="${getAWSImageUrl(
                                                  emailData.facebookImg
                                                )}"
                                                alt="Facebook"
                                                title="Facebook"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                "
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        width: 32px !important;
                                        height: 32px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 15px;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                          >
                                            <a
                                            href="#"
                                              title="Twitter"
                                              target="_blank"
                                            >
                                              <img
                                                src="${getAWSImageUrl(
                                                  emailData.twitterImg
                                                )}"
                                                alt="Twitter"
                                                title="Twitter"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                "
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        width: 32px !important;
                                        height: 32px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 15px;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                          >
                                            <a
                                            href="#"
                                              title="Instagram"
                                              target="_blank"
                                            >
                                              <img
                                                src="${getAWSImageUrl(
                                                  emailData.instagramImg
                                                )}"
                                                alt="Instagram"
                                                title="Instagram"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                "
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        width: 32px !important;
                                        height: 32px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 0px;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                          >
                                            <a
                                            href="#"
                                              title="LinkedIn"
                                              target="_blank"
                                            >
                                              <img
                                                src="${getAWSImageUrl(
                                                  emailData.linkedInImg
                                                )}"
                                                alt="LinkedIn"
                                                title="LinkedIn"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                "
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 5px 10px 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="line-height: 140%; font-size: 14px">
                                    <span
                                      style="
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      "
                                      ><span
                                        style="
                                          color: #ecf0f1;
                                          font-size: 14px;
                                          line-height: 19.6px;
                                        "
                                        ><span
                                          style="
                                            line-height: 19.6px;
                                            font-size: 14px;
                                          "
                                          >Inventailor &copy;&nbsp; Alle rettigheder forbeholdes</span
                                        ></span
                                      ></span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div
              class="u-row-container"
              style="padding: 0px; background-color: #f9f9f9"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #927f58;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f9f9f9;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #927f58;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 15px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  height="0px"
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    border-spacing: 0;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    vertical-align: top;
                                    border-top: 1px solid #927f58;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <tbody>
                                    <tr style="vertical-align: top">
                                      <td
                                        style="
                                          word-break: break-word;
                                          border-collapse: collapse !important;
                                          vertical-align: top;
                                          font-size: 0px;
                                          line-height: 0px;
                                          mso-line-height-rule: exactly;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <span>&#160;</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #f9f9f9;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 40px 30px 20px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                ></div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
  </body>
</html>
  `;
};

module.exports.sendNewsLetterMail = () => {
  return `
    <html xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <!--[if !mso]><!-- -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="date=no">
    <meta name="format-detection" content="address=no">
    <meta name="format-detection" content="email=no">
    <meta name="x-apple-disable-message-reformatting">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:ital,wght@0,400;0,400;0,500;0,600;0,700"
        rel="stylesheet">
    <title>Inventailor</title>
    <style>
        html,
        body {
            margin: 0 !important;
            padding: 0 !important;
            min-height: 100% !important;
            width: 100% !important;
            -webkit-font-smoothing: antialiased;
        }

        * {
            -ms-text-size-adjust: 100%;
        }

        #outlook a {
            padding: 0;
        }

        .ReadMsgBody,
        .ExternalClass {
            width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass td,
        .ExternalClass div,
        .ExternalClass span,
        .ExternalClass font {
            line-height: 100%;
        }

        table,
        td,
        th {
            mso-table-lspace: 0 !important;
            mso-table-rspace: 0 !important;
            border-collapse: collapse;
        }

        u+.body table,
        u+.body td,
        u+.body th {
            will-change: transform;
        }

        body,
        td,
        th,
        p,
        div,
        li,
        a,
        span {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            mso-line-height-rule: exactly;
        }

        img {
            border: 0;
            outline: 0;
            line-height: 100%;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
        }

        .pc-gmail-fix {
            display: none;
            display: none !important;
        }

        .body .pc-project-body {
            background-color: transparent !important;
        }

        @media (min-width: 621px) {
            .pc-lg-hide {
                display: none;
            }

            .pc-lg-bg-img-hide {
                background-image: none !important;
            }
        }
    </style>

    <style>
        @media (max-width: 620px) {
            .pc-project-body {
                min-width: 0px !important;
            }

            .pc-project-container {
                width: 100% !important;
            }

            .pc-sm-hide {
                display: none !important;
            }

            .pc-sm-bg-img-hide {
                background-image: none !important;
            }

            .pc-w620-fontSize-12px {
                font-size: 12px !important;
            }

            .pc-w620-padding-10-20-10-20 {
                padding: 10px 20px 10px 20px !important;
            }

            table.pc-w620-spacing-0-0-0-0 {
                margin: 0px 0px 0px 0px !important;
            }

            td.pc-w620-spacing-0-0-0-0,
            th.pc-w620-spacing-0-0-0-0 {
                margin: 0 !important;
                padding: 0px 0px 0px 0px !important;
            }

            .pc-w620-itemsSpacings-0-20 {
                padding-left: 0px !important;
                padding-right: 0px !important;
                padding-top: 10px !important;
                padding-bottom: 10px !important;
            }

            .pc-w620-width-auto {
                width: auto !important;
            }

            .pc-w620-height-22 {
                height: 28px !important;
            }

            .pc-w620-itemsSpacings-10-0 {
                padding-left: 5px !important;
                padding-right: 5px !important;
                padding-top: 0px !important;
                padding-bottom: 0px !important;
            }

            table.pc-w620-spacing-0-0-16-0 {
                margin: 0px 0px 16px 0px !important;
            }

            td.pc-w620-spacing-0-0-16-0,
            th.pc-w620-spacing-0-0-16-0 {
                margin: 0 !important;
                padding: 0px 0px 16px 0px !important;
            }

            .pc-w620-padding-0-0-0-0 {
                padding: 0px 0px 0px 0px !important;
            }

            .pc-w620-fontSize-32px {
                font-size: 32px !important;
            }

            .pc-w620-lineHeight-133pc {
                line-height: 133% !important;
            }

            table.pc-w620-spacing-0-40-16-40 {
                margin: 0px 40px 16px 40px !important;
            }

            td.pc-w620-spacing-0-40-16-40,
            th.pc-w620-spacing-0-40-16-40 {
                margin: 0 !important;
                padding: 0px 40px 16px 40px !important;
            }

            .pc-w620-itemsSpacings-6-30 {
                padding-left: 3px !important;
                padding-right: 3px !important;
                padding-top: 15px !important;
                padding-bottom: 15px !important;
            }

            .pc-w620-padding-24-0-0-0 {
                padding: 24px 0px 0px 0px !important;
            }

            .pc-w620-itemsSpacings-0-24 {
                padding-left: 0px !important;
                padding-right: 0px !important;
                padding-top: 12px !important;
                padding-bottom: 12px !important;
            }

            .pc-w620-valign-top {
                vertical-align: top !important;
            }

            td.pc-w620-halign-center,
            th.pc-w620-halign-center {
                text-align: center !important;
            }

            table.pc-w620-halign-center {
                float: none !important;
                margin-right: auto !important;
                margin-left: auto !important;
            }

            img.pc-w620-halign-center {
                margin-right: auto !important;
                margin-left: auto !important;
            }

            div.pc-w620-align-center,
            th.pc-w620-align-center,
            a.pc-w620-align-center,
            td.pc-w620-align-center {
                text-align: center !important;
                text-align-last: center !important;
            }

            table.pc-w620-align-center {
                float: none !important;
                margin-right: auto !important;
                margin-left: auto !important;
            }

            img.pc-w620-align-center {
                margin-right: auto !important;
                margin-left: auto !important;
            }

            div.pc-w620-textAlign-center,
            th.pc-w620-textAlign-center,
            a.pc-w620-textAlign-center,
            td.pc-w620-textAlign-center {
                text-align: center !important;
                text-align-last: center !important;
            }

            table.pc-w620-textAlign-center {
                float: none !important;
                margin-right: auto !important;
                margin-left: auto !important;
            }

            img.pc-w620-textAlign-center {
                margin-right: auto !important;
                margin-left: auto !important;
            }

            .pc-w620-itemsSpacings-0-16 {
                padding-left: 0px !important;
                padding-right: 0px !important;
                padding-top: 8px !important;
                padding-bottom: 8px !important;
            }

            .pc-w620-width-hug {
                width: auto !important;
            }

            .pc-w620-fontSize-18px {
                font-size: 18px !important;
            }

            .pc-w620-padding-24-24-24-24 {
                padding: 24px 24px 24px 24px !important;
            }

            .pc-w620-itemsSpacings-0-40 {
                padding-left: 0px !important;
                padding-right: 0px !important;
                padding-top: 20px !important;
                padding-bottom: 20px !important;
            }

            .pc-w620-valign-middle {
                vertical-align: middle !important;
            }

            td.pc-w620-halign-left,
            th.pc-w620-halign-left {
                text-align: left !important;
            }

            table.pc-w620-halign-left {
                float: none !important;
                margin-right: auto !important;
                margin-left: 0 !important;
            }

            img.pc-w620-halign-left {
                margin-right: auto !important;
                margin-left: 0 !important;
            }

            table.pc-w620-spacing-0-0-20-0 {
                margin: 0px 0px 20px 0px !important;
            }

            td.pc-w620-spacing-0-0-20-0,
            th.pc-w620-spacing-0-0-20-0 {
                margin: 0 !important;
                padding: 0px 0px 20px 0px !important;
            }

            div.pc-w620-textAlign-left,
            th.pc-w620-textAlign-left,
            a.pc-w620-textAlign-left,
            td.pc-w620-textAlign-left {
                text-align: left !important;
                text-align-last: left !important;
            }

            table.pc-w620-textAlign-left {
                float: none !important;
                margin-right: auto !important;
                margin-left: 0 !important;
            }

            img.pc-w620-textAlign-left {
                margin-right: auto !important;
                margin-left: 0 !important;
            }

            .pc-w620-width-fill {
                width: 100% !important;
            }

            .pc-w620-height-fill {
                height: 100% !important;
            }

            .pc-w620-height-77 {
                height: 77px !important;
            }

            table.pc-w620-halign-right {
                float: none !important;
                margin-right: 0 !important;
                margin-left: auto !important;
            }

            img.pc-w620-halign-right {
                margin-right: 0 !important;
                margin-left: auto !important;
            }

            div.pc-w620-textAlign-right,
            th.pc-w620-textAlign-right,
            a.pc-w620-textAlign-right,
            td.pc-w620-textAlign-right {
                text-align: right !important;
                text-align-last: right !important;
            }

            table.pc-w620-textAlign-right {
                float: none !important;
                margin-left: auto !important;
                margin-right: 0 !important;
            }

            img.pc-w620-textAlign-right {
                margin-right: 0 !important;
                margin-left: auto !important;
            }

            .pc-w620-itemsSpacings-15-20 {
                padding-left: 7.5px !important;
                padding-right: 7.5px !important;
                padding-top: 10px !important;
                padding-bottom: 10px !important;
            }

            .pc-w620-height-hug {
                height: auto !important;
            }

            .pc-w620-width-20 {
                width: 20px !important;
            }

            .pc-w620-height-auto {
                height: auto !important;
            }

            .pc-w620-width-100pc {
                width: 100% !important;
            }

            .pc-w620-padding-24-40-24-40 {
                padding: 24px 40px 24px 40px !important;
            }

            .pc-w620-gridCollapsed-1>tbody,
            .pc-w620-gridCollapsed-1>tbody>tr,
            .pc-w620-gridCollapsed-1>tr {
                display: inline-block !important;
            }

            .pc-w620-gridCollapsed-1.pc-width-fill>tbody,
            .pc-w620-gridCollapsed-1.pc-width-fill>tbody>tr,
            .pc-w620-gridCollapsed-1.pc-width-fill>tr {
                width: 100% !important;
            }

            .pc-w620-gridCollapsed-1.pc-w620-width-fill>tbody,
            .pc-w620-gridCollapsed-1.pc-w620-width-fill>tbody>tr,
            .pc-w620-gridCollapsed-1.pc-w620-width-fill>tr {
                width: 100% !important;
            }

            .pc-w620-gridCollapsed-1>tbody>tr>td,
            .pc-w620-gridCollapsed-1>tr>td {
                display: block !important;
                width: auto !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
            }

            .pc-w620-gridCollapsed-1.pc-width-fill>tbody>tr>td,
            .pc-w620-gridCollapsed-1.pc-width-fill>tr>td {
                width: 100% !important;
            }

            .pc-w620-gridCollapsed-1.pc-w620-width-fill>tbody>tr>td,
            .pc-w620-gridCollapsed-1.pc-w620-width-fill>tr>td {
                width: 100% !important;
            }

            .pc-w620-gridCollapsed-1>tbody>.pc-grid-tr-first>.pc-grid-td-first,
            pc-w620-gridCollapsed-1>.pc-grid-tr-first>.pc-grid-td-first {
                padding-top: 0 !important;
            }

            .pc-w620-gridCollapsed-1>tbody>.pc-grid-tr-last>.pc-grid-td-last,
            pc-w620-gridCollapsed-1>.pc-grid-tr-last>.pc-grid-td-last {
                padding-bottom: 0 !important;
            }

            .pc-w620-gridCollapsed-0>tbody>.pc-grid-tr-first>td,
            .pc-w620-gridCollapsed-0>.pc-grid-tr-first>td {
                padding-top: 0 !important;
            }

            .pc-w620-gridCollapsed-0>tbody>.pc-grid-tr-last>td,
            .pc-w620-gridCollapsed-0>.pc-grid-tr-last>td {
                padding-bottom: 0 !important;
            }

            .pc-w620-gridCollapsed-0>tbody>tr>.pc-grid-td-first,
            .pc-w620-gridCollapsed-0>tr>.pc-grid-td-first {
                padding-left: 0 !important;
            }

            .pc-w620-gridCollapsed-0>tbody>tr>.pc-grid-td-last,
            .pc-w620-gridCollapsed-0>tr>.pc-grid-td-last {
                padding-right: 0 !important;
            }

            .pc-w620-tableCollapsed-1>tbody,
            .pc-w620-tableCollapsed-1>tbody>tr,
            .pc-w620-tableCollapsed-1>tr {
                display: block !important;
            }

            .pc-w620-tableCollapsed-1.pc-width-fill>tbody,
            .pc-w620-tableCollapsed-1.pc-width-fill>tbody>tr,
            .pc-w620-tableCollapsed-1.pc-width-fill>tr {
                width: 100% !important;
            }

            .pc-w620-tableCollapsed-1.pc-w620-width-fill>tbody,
            .pc-w620-tableCollapsed-1.pc-w620-width-fill>tbody>tr,
            .pc-w620-tableCollapsed-1.pc-w620-width-fill>tr {
                width: 100% !important;
            }

            .pc-w620-tableCollapsed-1>tbody>tr>td,
            .pc-w620-tableCollapsed-1>tr>td {
                display: block !important;
                width: auto !important;
            }

            .pc-w620-tableCollapsed-1.pc-width-fill>tbody>tr>td,
            .pc-w620-tableCollapsed-1.pc-width-fill>tr>td {
                width: 100% !important;
                box-sizing: border-box !important;
            }

            .pc-w620-tableCollapsed-1.pc-w620-width-fill>tbody>tr>td,
            .pc-w620-tableCollapsed-1.pc-w620-width-fill>tr>td {
                width: 100% !important;
                box-sizing: border-box !important;
            }
        }
    </style>

    <!--[if !mso]><!-- -->
    <style>
        @media all {
            @font-face {
                font-family: 'Public Sans';
                font-style: normal;
                font-weight: 400;
                src: url('https://fonts.gstatic.com/s/publicsans/v15/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymuFpmJygcu.woff') format('woff'), url('https://fonts.gstatic.com/s/publicsans/v15/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymuFpmJygco.woff2') format('woff2');
            }

            @font-face {
                font-family: 'Public Sans';
                font-style: normal;
                font-weight: 600;
                src: url('https://fonts.gstatic.com/s/publicsans/v15/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymuyJ6Jygcu.woff') format('woff'), url('https://fonts.gstatic.com/s/publicsans/v15/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymuyJ6Jygco.woff2') format('woff2');
            }

            @font-face {
                font-family: 'Public Sans';
                font-style: normal;
                font-weight: 500;
                src: url('https://fonts.gstatic.com/s/publicsans/v15/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymuJJmJygcu.woff') format('woff'), url('https://fonts.gstatic.com/s/publicsans/v15/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymuJJmJygco.woff2') format('woff2');
            }

            @font-face {
                font-family: 'Public Sans';
                font-style: normal;
                font-weight: 700;
                src: url('https://fonts.gstatic.com/s/publicsans/v15/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymu8Z6Jygcu.woff') format('woff'), url('https://fonts.gstatic.com/s/publicsans/v15/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymu8Z6Jygco.woff2') format('woff2');
            }
        }
    </style>
    <!--<![endif]-->


    <!--[if mso]>
    <style type="text/css">
        .pc-font-alt {
            font-family: Arial, Helvetica, sans-serif !important;
        }
    </style>
    <![endif]-->
    <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
</head>

<body class="body pc-font-alt"
    style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #d7c692;"
    bgcolor="#d7c692">
    <table class="pc-project-body" style="table-layout: fixed; min-width: 600px; background-color: #d7c692;"
        bgcolor="#d7c692" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
        <tbody>
            <tr>
                <td align="center" valign="top">
                    <table class="pc-project-container" align="center" width="600"
                        style="width: 600px; max-width: 600px;" border="0" cellpadding="0" cellspacing="0"
                        role="presentation">
                        <tbody>
                            <tr>
                                <td style="padding: 0px 0px 0px 0px;" align="left" valign="top">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"
                                        style="width: 100%;">
                                        <tbody>
                                            <tr>
                                                <td valign="top">
                                                </td>
                                            </tr>


                                            <tr>
                                                <td valign="top">
                                                    <!-- BEGIN MODULE: Menu -->
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                        role="presentation">
                                                        <tbody>
                                                            <tr>
                                                                <td class="pc-w620-spacing-0-0-0-0"
                                                                    style="padding: 0px 0px 0px 0px;">

                                                                    <table width="100%" border="0" cellspacing="0"
                                                                        cellpadding="0" role="presentation">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td valign="top"
                                                                                    class="pc-w620-padding-20"
                                                                                    style="padding: 20px; border-radius: 0px; background-color: #fff; border-bottom: 2px solid #666"
                                                                                    bgcolor="#fff">
                                                                                    <table width="100%" border="0"
                                                                                        cellpadding="0" cellspacing="0"
                                                                                        role="presentation">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    <table
                                                                                                        class="pc-width-fill pc-w620-gridCollapsed-0"
                                                                                                        width="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tbody>
                                                                                                            <tr
                                                                                                                class="pc-grid-tr-first pc-grid-tr-last">
                                                                                                                <td class="pc-grid-td-first pc-w620-itemsSpacings-0-20"
                                                                                                                    align="right"
                                                                                                                    valign="middle"
                                                                                                                    style="padding-top: 0px; padding-right: 10px; padding-bottom: 0px; padding-left: 0px;">

                                                                                                                    <table
                                                                                                                        width="100%"
                                                                                                                        border="0"
                                                                                                                        cellpadding="0"
                                                                                                                        cellspacing="0"
                                                                                                                        role="presentation"
                                                                                                                        style="border-collapse: separate; border-spacing: 0; width: 100%;">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="center"
                                                                                                                                    valign="middle">
                                                                                                                                    <table
                                                                                                                                        align="center"
                                                                                                                                        width="100%"
                                                                                                                                        border="0"
                                                                                                                                        cellpadding="0"
                                                                                                                                        cellspacing="0"
                                                                                                                                        role="presentation"
                                                                                                                                        style="width: 100%;">
                                                                                                                                        <tbody>
                                                                                                                                            <tr>
                                                                                                                                                <td align="center"
                                                                                                                                                    valign="top">

                                                                                                                                                    <table
                                                                                                                                                        width="100%"
                                                                                                                                                        border="0"
                                                                                                                                                        cellpadding="0"
                                                                                                                                                        cellspacing="0"
                                                                                                                                                        role="presentation">
                                                                                                                                                        <tbody>
                                                                                                                                                            <tr>
                                                                                                                                                                <td align="center"
                                                                                                                                                                    valign="top">

                                                                                                                                                                    <a class="pc-font-alt"
                                                                                                                                                                        href="https://inventailor.com"
                                                                                                                                                                        target="_blank"
                                                                                                                                                                        style="text-decoration: none;">
                                                                                                                                                                       
<img src="https://s3.eu-west-1.amazonaws.com/inventailor.dk/maunual/inventailor_logo_small.png"
     class="pc-w620-width-auto pc-w620-height-22"
     class="logo"
     alt=""
     style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; max-height: 100%; width: 300px; border: 0; object-fit: contain;">
                                                                                                                                                                    </a>
                                                                                                                                                                </td>
                                                                                                                                                            </tr>
                                                                                                                                                        </tbody>
                                                                                                                                                    </table>

                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </tbody>
                                                                                                                                    </table>

                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>


                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>

                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <!-- END MODULE: Menu -->
                                                </td>
                                            </tr>


                                            <tr>
                                                <td valign="top">
                                                    <!-- BEGIN MODULE: Header -->
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                        role="presentation">
                                                        <tbody>
                                                            <tr>
                                                                <td class="pc-w620-spacing-0-0-0-0"
                                                                    style="padding: 0px 0px 0px 0px;">

                                                                    <table width="100%" border="0" cellspacing="0"
                                                                        cellpadding="0" role="presentation">
                                                                        <tbody>
                                                                            <tr>
                                                                                <!--[if !gte mso 9]><!-- -->
                                                                                <td valign="top"
                                                                                    class="pc-w620-padding-24-0-0-0"
                                                                                    style="background-size: cover; background-position: center; background-repeat: no-repeat; padding: 40px 0px 0px 0px; border-radius: 0px; background-color: #ffffff;"
                                                                                    bgcolor="#ffffff"
                                                                                    background="https://inventailor.com/images/front-images/image-17230220598457.png">
                                                                                    <!--<![endif]-->
                                                                                    <!--[if gte mso 9]>
                <td valign="top" align="center" style="background-size: cover; background-position: center; background-repeat: no-repeat; background-color: #ffffff; border-radius: 0px;" bgcolor="#ffffff" background="https://inventailor.com/images/front-images/image-17230220598457.png">
            <![endif]-->


                                                                                    <!--[if gte mso 9]>
                <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;">
                    <v:fill src="https://inventailor.com/images/front-images/image-17230220598457.png" color="#ffffff" type="frame" size="1,1" aspect="atleast" origin="0,0" position="0,0"/>
                    <v:textbox style="mso-fit-shape-to-text: true;" inset="0,0,0,0">
                        <div style="font-size: 0; line-height: 0;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                    <td style="font-size: 14px; line-height: 1.5;" valign="top">
                                        <p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                            <tr>
                                                <td colspan="3" height="40" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td width="0" valign="top" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                                <td valign="top" align="left">
                <![endif]-->



                                                                                    <table width="100%" border="0"
                                                                                        cellpadding="0" cellspacing="0"
                                                                                        role="presentation">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="pc-w620-spacing-0-0-16-0"
                                                                                                    align="center"
                                                                                                    valign="top"
                                                                                                    style="padding: 0px 0px 24px 0px;">

                                                                                                    <table border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                        width="100%"
                                                                                                        style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td valign="top"
                                                                                                                    class="pc-w620-padding-0-0-0-0"
                                                                                                                    align="center">


                                                                                                                    <div class="pc-font-alt pc-w620-fontSize-32px"
                                                                                                                        style="line-height: 100%; letter-spacing: -0.04em; font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 40px; font-weight: bold; font-variant-ligatures: normal; color: #192a32; text-align: center; text-align-last: center;">
                                                                                                                        <div>
                                                                                                                            <span
                                                                                                                                style="font-family: 'Public Sans', Arial, Helvetica, sans-serif;font-weight: bold; color: rgb(25, 42, 50);letter-spacing: -0.04em; line-height: 55px; text-transform: uppercase;"
                                                                                                                                data-letter-spacing-original="-4%">
                                                                                                                                Vind præmier for<br /> 
                                                                                                                                 op til 30.000 kr.</span>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>

                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>



                                                                                    <table width="100%" border="0"
                                                                                        cellpadding="0" cellspacing="0"
                                                                                        role="presentation">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="pc-w620-spacing-0-40-16-40"
                                                                                                    align="center"
                                                                                                    valign="top"
                                                                                                    style="padding: 0px 30px 24px 30px; mso-padding-left-alt: 0; margin-left:100px;">

                                                                                                    <table border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                        width="100%"
                                                                                                        style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td valign="top"
                                                                                                                    class="pc-w620-padding-0-0-0-0"
                                                                                                                    align="center">


                                                                                                                    <div class="pc-font-alt pc-w620-fontSize-12px pc-w620-lineHeight-133pc"
                                                                                                                        style="line-height: 130%; letter-spacing: -0.2px; font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 16px; font-weight: bold; font-variant-ligatures: normal; color: #192a32; text-align: center; text-align-last: center;">
                                                                                                                        <div>
                                                                                                                            <span
                                                                                                                                style="font-family: 'Public Sans', Arial, Helvetica, sans-serif;font-weight: 400;font-style: normal;color: rgb(25, 42, 50);letter-spacing: 0px;"
                                                                                                                                data-letter-spacing-original="0">
                                                                                                                                <p>I hele september kører vi skræddersyede frakke kampagne specielt til -40% på normalprisen: kr. 8.000 - <br/><strong>NU kr. 4.800.</strong>.</p>
                                                                                                                                <!-- <br /> -->
                                                                                                                               <p>I oktober vil prisen også være kr. 4.800.-</p>
                                                                                                                                <!-- <br /> -->
                                                                                                                                <p>Du er med i konkurrencen som løbende køre fra 10 september 2024 – 30 november 2024</p>
                                                                                                                                <!-- <br /> -->
                                                                                                                                <p>Vi trækker lod om et gavebevis på <br/>kr. 10.000 slut september.</p>
                                                                                                                                <!-- <br /> -->
                                                                                                                                <p>Vi trækker til sidst lod om 2 gavebevis på <br/>kr. 20.000 slut oktober.</p>
                                                                                                                                <!-- <br /> -->
                                                                                                                                <!-- <p>Vi trækker til sidst lod om et gavebevis på <br/>kr. 10.000 slut november.</p> -->
                                                                                                                            </span>
                                                                                                                        </div>
                                                                                                                    </div>

                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>

                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>



                                                                                    <table width="100%" border="0"
                                                                                        cellpadding="0" cellspacing="0"
                                                                                        role="presentation">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center"
                                                                                                    valign="top"
                                                                                                    style="padding: 0px 0px 28px 0px;">

                                                                                                    <a class="pc-font-alt"
                                                                                                        href="#products"
                                                                                                        style="text-decoration: none;">
                                                                                                        <img src="https://inventailor.com/images/front-images/image-17230220595141.png"
                                                                                                            class=""
                                                                                                            width="24"
                                                                                                            height="24"
                                                                                                            alt=""
                                                                                                            style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:24px; height: auto; max-width: 100%; border: 0;">
                                                                                                    </a>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>






                                                                                    <!--[if gte mso 9]>
                                                </td>
                                                <td width="0" style="line-height: 1px; font-size: 1px;" valign="top">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" height="0" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p>
                    </v:textbox>
                </v:rect>
                <![endif]-->
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>

                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <!-- END MODULE: Header -->
                                                </td>
                                            </tr>


                                            <tr>
                                                <td valign="top">
                                                    <!-- BEGIN MODULE: Products -->
                                                    <a name="products"></a>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                        role="presentation">
                                                        <tbody>
                                                            <tr>
                                                                <td class="pc-w620-spacing-0-0-0-0"
                                                                    style="padding: 0px 0px 0px 0px;">

                                                                    <table width="100%" border="0" cellspacing="0"
                                                                        cellpadding="0" role="presentation">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td valign="top"
                                                                                    class="pc-w620-padding-24-24-24-24"
                                                                                    style="padding: 20px 32px 20px 32px; border-radius: 0px; background-color: #ffffff;"
                                                                                    bgcolor="#ffffff">




                                                                                    <table width="100%" border="0"
                                                                                        cellpadding="0" cellspacing="0"
                                                                                        role="presentation">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center"
                                                                                                    valign="top"
                                                                                                    style="padding: 0px 0px 24px 0px;">

                                                                                                    <table border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation"
                                                                                                        width="100%"
                                                                                                        style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td valign="top"
                                                                                                                    align="center">




                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>

                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>






                                                                                    <table width="100%" border="0"
                                                                                        cellpadding="0" cellspacing="0"
                                                                                        role="presentation">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td valign="top"
                                                                                                    style="padding: 0px 0px 16px 0px;">
                                                                                                    <img src="https://s3.eu-west-1.amazonaws.com/inventailor.dk/product/1725566106016_inventailor-copy.png"
                                                                                                        class=""
                                                                                                        width="536"
                                                                                                        height="auto"
                                                                                                        alt=""
                                                                                                        style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:100%; height: auto; border: 0;">
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>



                                                                                    <table width="100%" border="0"
                                                                                        cellpadding="0" cellspacing="0"
                                                                                        role="presentation">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="pc-w620-valign-top pc-w620-halign-center"
                                                                                                    style="padding: 0px 0px 24px 0px;">
                                                                                                    <table
                                                                                                        class="pc-width-fill pc-w620-gridCollapsed-1 pc-w620-width-hug pc-w620-halign-center"
                                                                                                        width="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tbody>
                                                                                                            <tr
                                                                                                                class="pc-grid-tr-first pc-grid-tr-last">
                                                                                                                <td class="pc-grid-td-first pc-w620-itemsSpacings-0-16"
                                                                                                                    align="right"
                                                                                                                    valign="middle"
                                                                                                                    style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">

                                                                                                                    <table
                                                                                                                        class="pc-w620-width-hug"
                                                                                                                        width="100%"
                                                                                                                        border="0"
                                                                                                                        cellpadding="0"
                                                                                                                        cellspacing="0"
                                                                                                                        role="presentation"
                                                                                                                        style="border-collapse: separate; border-spacing: 0; width: 100%;">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td class="pc-w620-halign-center pc-w620-valign-top"
                                                                                                                                    align="left"
                                                                                                                                    valign="bottom">


                                                                                                                                    <table
                                                                                                                                        class="pc-w620-halign-center"
                                                                                                                                        align="left"
                                                                                                                                        width="100%"
                                                                                                                                        border="0"
                                                                                                                                        cellpadding="0"
                                                                                                                                        cellspacing="0"
                                                                                                                                        role="presentation"
                                                                                                                                        style="width: 100%;">
                                                                                                                                        <tbody>
                                                                                                                                            <tr>
                                                                                                                                                <td class="pc-w620-halign-center"
                                                                                                                                                    align="left"
                                                                                                                                                    valign="top">

                                                                                                                                                    <table
                                                                                                                                                        class="pc-w620-halign-center"
                                                                                                                                                        width="100%"
                                                                                                                                                        align="left"
                                                                                                                                                        border="0"
                                                                                                                                                        cellpadding="0"
                                                                                                                                                        cellspacing="0"
                                                                                                                                                        role="presentation">
                                                                                                                                                        <tbody>
                                                                                                                                                            <tr>
                                                                                                                                                                <td valign="top"
                                                                                                                                                                    style="padding: 0px 0px 8px 0px;">

                                                                                                                                                                    <table
                                                                                                                                                                        border="0"
                                                                                                                                                                        cellpadding="0"
                                                                                                                                                                        cellspacing="0"
                                                                                                                                                                        role="presentation"
                                                                                                                                                                        width="100%"
                                                                                                                                                                        align="left"
                                                                                                                                                                        style="border-collapse: separate; border-spacing: 0;">
                                                                                                                                                                        <tbody>
                                                                                                                                                                            <tr>
                                                                                                                                                                                <td valign="top"
                                                                                                                                                                                    class="pc-w620-textAlign-center"
                                                                                                                                                                                    align="left">


                                                                                                                                                                                    <div class="pc-font-alt pc-w620-textAlign-center"
                                                                                                                                                                                        style="line-height: 130%; letter-spacing: -0.02em; font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 500; font-variant-ligatures: normal; color: #8b99a0; text-align: left; text-align-last: left;">
                                                                                                                                                                                        <div>
                                                                                                                                                                                            <span
                                                                                                                                                                                                style="font-weight: 500;font-style: normal;color: #8b99a0;letter-spacing: -0.02em;"
                                                                                                                                                                                                data-letter-spacing-original="-2%">sort, mørkeblå, mørkegrå, lysegrå, camel, rød mm</span>
                                                                                                                                                                                        </div>
                                                                                                                                                                                    </div>

                                                                                                                                                                                </td>
                                                                                                                                                                            </tr>
                                                                                                                                                                        </tbody>
                                                                                                                                                                    </table>

                                                                                                                                                                </td>
                                                                                                                                                            </tr>
                                                                                                                                                        </tbody>
                                                                                                                                                    </table>

                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                            <tr>
                                                                                                                                                <td class="pc-w620-halign-center"
                                                                                                                                                    align="left"
                                                                                                                                                    valign="top">

                                                                                                                                                    <table
                                                                                                                                                        class="pc-w620-halign-center"
                                                                                                                                                        align="left"
                                                                                                                                                        border="0"
                                                                                                                                                        cellpadding="0"
                                                                                                                                                        cellspacing="0"
                                                                                                                                                        role="presentation">
                                                                                                                                                        <tbody>
                                                                                                                                                            <tr>
                                                                                                                                                                <td valign="top"
                                                                                                                                                                    style="padding: 0px 0px 8px 0px;">

                                                                                                                                                                    <table
                                                                                                                                                                        border="0"
                                                                                                                                                                        cellpadding="0"
                                                                                                                                                                        cellspacing="0"
                                                                                                                                                                        role="presentation"
                                                                                                                                                                        width="100%"
                                                                                                                                                                        style="border-collapse: separate; border-spacing: 0;">
                                                                                                                                                                        <tbody>
                                                                                                                                                                            <tr>
                                                                                                                                                                                <td valign="top"
                                                                                                                                                                                    class="pc-w620-textAlign-center"
                                                                                                                                                                                    align="left">


                                                                                                                                                                                    <div class="pc-font-alt pc-w620-textAlign-center"
                                                                                                                                                                                        style="line-height: 140%; letter-spacing: -0.02em; font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: normal; font-variant-ligatures: normal; color: #192a32; text-align: left; text-align-last: left;">
                                                                                                                                                                                        <div>
                                                                                                                                                                                            <span
                                                                                                                                                                                                style="font-family: 'Public Sans', Arial, Helvetica, sans-serif;color: rgb(25, 42, 50);letter-spacing: -0.02em;"
                                                                                                                                                                                                data-letter-spacing-original="-2%">Overcoat</span>
                                                                                                                                                                                        </div>
                                                                                                                                                                                    </div>

                                                                                                                                                                                </td>
                                                                                                                                                                            </tr>
                                                                                                                                                                        </tbody>
                                                                                                                                                                    </table>

                                                                                                                                                                </td>
                                                                                                                                                            </tr>
                                                                                                                                                        </tbody>
                                                                                                                                                    </table>

                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                            <tr>
                                                                                                                                                <td class="pc-w620-halign-center"
                                                                                                                                                    align="left"
                                                                                                                                                    valign="top">

                                                                                                                                                    <table
                                                                                                                                                        class="pc-w620-halign-center"
                                                                                                                                                        align="left"
                                                                                                                                                        border="0"
                                                                                                                                                        cellpadding="0"
                                                                                                                                                        cellspacing="0"
                                                                                                                                                        role="presentation">
                                                                                                                                                        <tbody>
                                                                                                                                                            <tr>
                                                                                                                                                                <td class="pc-w620-spacing-0-0-0-0"
                                                                                                                                                                    valign="top"
                                                                                                                                                                    style="padding: 0px 0px 8px 0px;">

                                                                                                                                                                    <table
                                                                                                                                                                        border="0"
                                                                                                                                                                        cellpadding="0"
                                                                                                                                                                        cellspacing="0"
                                                                                                                                                                        role="presentation"
                                                                                                                                                                        width="100%"
                                                                                                                                                                        style="border-collapse: separate; border-spacing: 0;">
                                                                                                                                                                        <tbody>
                                                                                                                                                                            <tr>
                                                                                                                                                                                <td valign="top"
                                                                                                                                                                                    class="pc-w620-padding-0-0-0-0 pc-w620-textAlign-center"
                                                                                                                                                                                    align="left">

                                                                                                                                                                                </td>
                                                                                                                                                                            </tr>
                                                                                                                                                                        </tbody>
                                                                                                                                                                    </table>

                                                                                                                                                                </td>
                                                                                                                                                            </tr>
                                                                                                                                                        </tbody>
                                                                                                                                                    </table>

                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </tbody>
                                                                                                                                    </table>

                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                                <td class="pc-grid-td-last pc-w620-itemsSpacings-0-16"
                                                                                                                    align="right"
                                                                                                                    valign="middle"
                                                                                                                    style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">

                                                                                                                    <table
                                                                                                                        width="100%"
                                                                                                                        border="0"
                                                                                                                        cellpadding="0"
                                                                                                                        cellspacing="0"
                                                                                                                        role="presentation"
                                                                                                                        style="border-collapse: separate; border-spacing: 0; width: 100%;">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td class="pc-w620-halign-center pc-w620-valign-top"
                                                                                                                                    align="right"
                                                                                                                                    valign="middle">


                                                                                                                                    <table
                                                                                                                                        class="pc-w620-halign-center"
                                                                                                                                        align="right"
                                                                                                                                        width="100%"
                                                                                                                                        border="0"
                                                                                                                                        cellpadding="0"
                                                                                                                                        cellspacing="0"
                                                                                                                                        role="presentation"
                                                                                                                                        style="width: 100%;">
                                                                                                                                        <tbody>
                                                                                                                                            <tr>
                                                                                                                                                <td class="pc-w620-halign-center"
                                                                                                                                                    align="right"
                                                                                                                                                    valign="top">

                                                                                                                                                    <table
                                                                                                                                                        width="100%"
                                                                                                                                                        border="0"
                                                                                                                                                        cellpadding="0"
                                                                                                                                                        cellspacing="0"
                                                                                                                                                        role="presentation">
                                                                                                                                                        <tbody>
                                                                                                                                                            <tr>
                                                                                                                                                                <th valign="top"
                                                                                                                                                                    class="pc-w620-align-center"
                                                                                                                                                                    align="right"
                                                                                                                                                                    style="text-align: right; font-weight: normal; line-height: 1;">
                                                                                                                                                                    <!--[if mso]>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-align-center" align="right" style="border-collapse: separate; border-spacing: 0;">
            <tr>
                <td valign="middle" align="center" style="border-radius: 100px 100px 100px 100px; border-top: 1px solid #192a32; border-right: 1px solid #192a32; border-bottom: 1px solid #192a32; border-left: 1px solid #192a32; background-color: transparent; text-align:center; color: #ffffff; padding: 8px 24px 8px 24px; mso-padding-left-alt: 0; margin-left:24px;" bgcolor="transparent">
                                    <a class="pc-font-alt" style="display: inline-block; text-decoration: none; font-variant-ligatures: normal; font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-weight: 500; font-size: 16px; line-height: 24px; letter-spacing: -0.2px; text-align: center; color: #192a32;" href="https://inventailor.com/frakkekampagne2024" target="_blank"><span style="display: block;"><span style="font-family: 'Public Sans', Arial, Helvetica, sans-serif;font-size: 14px;font-weight: 600;font-style: normal;color: #192a32;letter-spacing: 0px;" data-letter-spacing-original="0px">Buy Now</span></span></a>
                                </td>
            </tr>
        </table>
        <![endif]-->

                                                                                                                                                                    <!--[if !mso]><!-- -->
                                                                                                                                                                    <a class="pc-w620-textAlign-center"
                                                                                                                                                                        style="display: inline-block; box-sizing: border-box; border-top: 1px solid #192a32; border-right: 1px solid #192a32; border-bottom: 1px solid #192a32; border-left: 1px solid #192a32; border-radius: 100px 100px 100px 100px; background-color: transparent; padding: 8px 24px 8px 24px; font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-weight: 500; font-size: 16px; line-height: 24px; letter-spacing: -0.2px; color: #192a32; vertical-align: top; text-align: center; text-align-last: center; text-decoration: none; -webkit-text-size-adjust: none; mso-hide: all;"
                                                                                                                                                                        href="https://inventailor.com/frakkekampagne2024"
                                                                                                                                                                        target="_blank"><span
                                                                                                                                                                            style="display: block;"><span
                                                                                                                                                                                style="font-family: 'Public Sans', Arial, Helvetica, sans-serif;font-size: 14px;font-weight: 600;font-style: normal;color: #192a32;letter-spacing: 0px;"
                                                                                                                                                                                data-letter-spacing-original="0px">se flere detaljer</span></span></a>
                                                                                                                                                                    <!--<![endif]-->
                                                                                                                                                                </th>
                                                                                                                                                            </tr>
                                                                                                                                                        </tbody>
                                                                                                                                                    </table>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </tbody>
                                                                                                                                    </table>

                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>

                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>

                                                                                    <table width="100%" border="0"
                                                                                        cellpadding="0" cellspacing="0"
                                                                                        role="presentation">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td valign="top"
                                                                                                    style="padding: 0px 0px 16px 0px;">
                                                                                            <tr>
                                                                                                <td valign="top"
                                                                                                    style="padding: 0px 40px 16px 40px; text-align: center; font-size: 14px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 22px;">
                                                                                                    <strong style="font-size: 18px;">
                                                                                                        Vi har fået en ny hjemmeside
                                                                                                    </strong>🚀 <br />
                                                                                                    <p>Vi er glade for at
                                                                                                        endelig kunne give
                                                                                                        vores kunder en mere
                                                                                                        brugervenlig
                                                                                                        hjemmeside. </p>
                                                                                                    <p>Vi har
                                                                                                        nu fået lavet en
                                                                                                        sprit ny hjemmeside
                                                                                                        med en webshop hvor
                                                                                                        du kan købe direkte
                                                                                                        vores bestseller i
                                                                                                        din unikke
                                                                                                        størrelse.</p>
                                                                                                    <p>I den forbindelse vil vi gerne tilbyde et stærkt tilbud.</p>
                                                                                                    <p>Køb et gavebevis i hele september. normalpris <br/>kr. 8.000 <strong>NU kr. 4.000</strong></p>
                                                                                                </td>
                                                                                            </tr>

                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td valign="top"
                                                                                    style="padding: 0px 0px 16px 0px;">
                                                                                    <a href="https://inventailor.com"
                                                                                        target="_blank">
                                                                                        <img src="https://s3.eu-west-1.amazonaws.com/inventailor.dk/maunual/launch-website.png"
                                                                                            class="" width="536"
                                                                                            height="auto" alt=""
                                                                                            style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:100%; height: auto; border: 0;">
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>





                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- END MODULE: Products -->
                                </td>
                            </tr>


                            <tr>
                                <td valign="top">
                                    <!-- BEGIN MODULE: Footer -->
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                        <tbody>
                                            <tr>
                                                <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">


                                                    <table cellpadding="0" cellspacing="0" align="center" role="none"
                                                        style="border-collapse:collapse;border-spacing:0px; table-layout:fixed!important">
                                                        <tbody>
                                                            <tr>
                                                                <td align="center" bgcolor="#eeeeee"
                                                                    style="padding:0px;margin:0px;background-color:rgb(238,238,238)">
                                                                    <table bgcolor="#ffffff" align="center"
                                                                        cellpadding="0" cellspacing="0" role="none"
                                                                        style="border-collapse:collapse;border-spacing:0px;background-color:transparent;">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="left"
                                                                                    style="padding:0px 20px;margin:0px">
                                                                                    <table cellpadding="0"
                                                                                        cellspacing="0" width="100%"
                                                                                        role="none"
                                                                                        style="border-collapse:collapse;border-spacing:0px">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center"
                                                                                                    valign="top"
                                                                                                    style="padding:0px;margin:0px;width:560px">
                                                                                                    <table
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        width="100%"
                                                                                                        role="presentation"
                                                                                                        style="border-collapse:collapse;border-spacing:0px">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td align="center"
                                                                                                                    style="padding:20px;margin:0px;font-size:0px">
                                                                                                                    <table
                                                                                                                        border="0"
                                                                                                                        width="100%"
                                                                                                                        height="100%"
                                                                                                                        cellpadding="0"
                                                                                                                        cellspacing="0"
                                                                                                                        role="presentation"
                                                                                                                        style="border-collapse:collapse;border-spacing:0px">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td
                                                                                                                                    style="padding:0px;border-bottom-width:0px;border-bottom-style:solid;border-bottom-color:rgb(204,204,204);background:unset;height:1px;width:520px;margin:0px">
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="center"
                                                                                                    valign="top"
                                                                                                    style="padding:0px;margin:0px;width:560px">
                                                                                                    <table
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        width="100%"
                                                                                                        role="presentation"
                                                                                                        style="border-collapse:collapse;border-spacing:0px">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td align="center"
                                                                                                                    height="40"
                                                                                                                    style="padding:0px;margin:0px">
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td align="center"
                                                                                                                    style="padding:0px;margin:0px;font-size:0px">
                                                                                                                    <table
                                                                                                                        cellpadding="0"
                                                                                                                        cellspacing="0"
                                                                                                                        role="presentation"
                                                                                                                        style="border-collapse:collapse;border-spacing:0px">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="center"
                                                                                                                                    style="padding:0px 20px 10px; margin:0px">
                                                                                                                                    <img style="width: 130px; height: auto;"
                                                                                                                                        src="https://s3.eu-west-1.amazonaws.com/inventailor.dk/maunual/hvid.png" />
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                            <tr>
                                                                                                                                <td align="center"
                                                                                                                                    style="padding:0px 20px 20px; margin:0px">
                                                                                                                                    <div
                                                                                                                                        style="font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-weight: normal; font-size: 14px; line-height: 26px;">
                                                                                                                                        Klerkegade 12, st. th. - 1308 København K
                                                                                                                                        <br />
                                                                                                                                        Telefon: +45 31327890
                                                                                                                                        <br />
                                                                                                                                        Web: www.inventailor.com,
                                                                                                                                        Mail: sh@inventailor.com
                                                                                                                                    </div>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <table
                                                                        style="border-collapse: collapse; width: 100%; max-width: 200px; margin: 20px auto;">
                                                                        <tr>
                                                                            <td
                                                                                style="text-align: center; padding: 10px;">
                                                                                <a href="https://www.facebook.com/share/QXeJDNPkx19qDzra/?mibextid=LQQJ4d"
                                                                                    target="_blank" title="Facebook"
                                                                                    style="text-decoration: none; color: #333;">
                                                                                    <img src="https://s3.eu-west-1.amazonaws.com/inventailor.dk/maunual/facebook.png" />
                                                                                </a>
                                                                            </td>
                                                                            <td
                                                                                style="text-align: center; padding: 10px;">
                                                                                <a href="https://www.instagram.com/inventailor/profilecard/?igsh=cnJvcWtqM3J6cmJ1"
                                                                                    target="_blank" title="Instagram" style="text-decoration: none; color: #333;">
                                                                                    <img src="https://s3.eu-west-1.amazonaws.com/inventailor.dk/maunual/instagram.png" />
                                                                                </a>
                                                                            </td>
                                                                            <td
                                                                                style="text-align: center; padding: 10px;">
                                                                                <a href="https://www.linkedin.com/in/s%C3%B8ren-john-hansen?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                                                                    target="_blank" title="LinkedIn" style="text-decoration: none; color: #333;">
                                                                                    <img src="https://s3.eu-west-1.amazonaws.com/inventailor.dk/maunual/linkdein.png" />
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <table width="100%" border="0" cellspacing="0"
                                                                        cellpadding="0" role="presentation">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td valign="top"
                                                                                    class="pc-w620-padding-24-40-24-40"
                                                                                    style="padding: 40px 62px 40px 62px; border-radius: 0px; background-color: #201c10;"
                                                                                    bgcolor="#201c10">




                                                                                    <table width="100%" border="0"
                                                                                        cellpadding="0" cellspacing="0"
                                                                                        role="presentation">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="pc-w620-valign-middle pc-w620-halign-left"
                                                                                                    style="padding: 0px 0px 8px 0px;">
                                                                                                    <table
                                                                                                        class="pc-width-fill pc-w620-gridCollapsed-0 pc-w620-halign-left"
                                                                                                        width="100%"
                                                                                                        height="100%"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        role="presentation">
                                                                                                        <tbody>
                                                                                                            <tr
                                                                                                                class="pc-grid-tr-first pc-grid-tr-last">
                                                                                                                <td class="pc-grid-td-last pc-w620-itemsSpacings-0-40"
                                                                                                                    align="left"
                                                                                                                    valign="top"
                                                                                                                    style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 20px;">

                                                                                                                    <table
                                                                                                                        class="pc-w620-width-fill pc-w620-height-fill"
                                                                                                                        width="100%"
                                                                                                                        border="0"
                                                                                                                        cellpadding="0"
                                                                                                                        cellspacing="0"
                                                                                                                        role="presentation"
                                                                                                                        style="border-collapse: separate; border-spacing: 0; width: 100%;">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td class="pc-w620-halign-right pc-w620-valign-top"
                                                                                                                                    align="center valign="
                                                                                                                                    middle">


                                                                                                                                    <table
                                                                                                                                        class="pc-w620-halign-right"
                                                                                                                                        align="right"
                                                                                                                                        width="100%"
                                                                                                                                        border="0"
                                                                                                                                        cellpadding="0"
                                                                                                                                        cellspacing="0"
                                                                                                                                        role="presentation"
                                                                                                                                        style="width: 100%;">
                                                                                                                                        <tbody>
                                                                                                                                            <tr>
                                                                                                                                                <td class="pc-w620-halign-right"
                                                                                                                                                    align="center"
                                                                                                                                                    valign="top"
                                                                                                                                                    style="color: #fff; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: 14px;">
                                                                                                                                                    @copyright
                                                                                                                                                    2024
                                                                                                                                                    @inventailor

                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </tbody>
                                                                                                                                    </table>

                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                            <tr>
                                                                                                                                <td class="pc-w620-halign-right"
                                                                                                                                    align="right"
                                                                                                                                    valign="top">

                                                                                                                                    <table
                                                                                                                                        class="pc-w620-halign-right"
                                                                                                                                        align="right"
                                                                                                                                        border="0"
                                                                                                                                        cellpadding="0"
                                                                                                                                        cellspacing="0"
                                                                                                                                        role="presentation">
                                                                                                                                        <tbody>
                                                                                                                                            <tr>
                                                                                                                                                <td class="pc-w620-valign-top pc-w620-halign-right"
                                                                                                                                                    align="right">
                                                                                                                                                    <table
                                                                                                                                                        class="pc-w620-halign-right pc-w620-width-hug"
                                                                                                                                                        align="right"
                                                                                                                                                        border="0"
                                                                                                                                                        cellpadding="0"
                                                                                                                                                        cellspacing="0"
                                                                                                                                                        role="presentation">
                                                                                                                                                        <tbody>
                                                                                                                                                            <tr>
                                                                                                                                                                <td
                                                                                                                                                                    valign="top">
                                                                                                                                                                    <table
                                                                                                                                                                        class="pc-width-hug pc-w620-gridCollapsed-1 pc-w620-width-hug pc-w620-halign-right"
                                                                                                                                                                        align="right"
                                                                                                                                                                        border="0"
                                                                                                                                                                        cellpadding="0"
                                                                                                                                                                        cellspacing="0"
                                                                                                                                                                        role="presentation">
                                                                                                                                                                        <tbody>
                                                                                                                                                                            <tr
                                                                                                                                                                                class="pc-grid-tr-first pc-grid-tr-last">
                                                                                                                                                                                <td class="pc-grid-td-first pc-w620-itemsSpacings-15-20"
                                                                                                                                                                                    valign="middle"
                                                                                                                                                                                    style="width: 50%; padding-top: 0px; padding-right: 7.5px; padding-bottom: 0px; padding-left: 0px;">

                                                                                                                                                                                    <table
                                                                                                                                                                                        width="100%"
                                                                                                                                                                                        border="0"
                                                                                                                                                                                        cellpadding="0"
                                                                                                                                                                                        cellspacing="0"
                                                                                                                                                                                        role="presentation"
                                                                                                                                                                                        style="border-collapse: separate; border-spacing: 0; width: 100%;">
                                                                                                                                                                                        <tbody>
                                                                                                                                                                                            <tr>
                                                                                                                                                                                                <td class="pc-w620-halign-right pc-w620-valign-top pc-w620-height-hug"
                                                                                                                                                                                                    align="right"
                                                                                                                                                                                                    valign="middle">


                                                                                                                                                                                                    <table
                                                                                                                                                                                                        class="pc-w620-halign-right"
                                                                                                                                                                                                        align="right"
                                                                                                                                                                                                        width="100%"
                                                                                                                                                                                                        border="0"
                                                                                                                                                                                                        cellpadding="0"
                                                                                                                                                                                                        cellspacing="0"
                                                                                                                                                                                                        role="presentation"
                                                                                                                                                                                                        style="width: 100%;">
                                                                                                                                                                                                        <tbody>
                                                                                                                                                                                                            <tr>
                                                                                                                                                                                                                <td class="pc-w620-halign-right"
                                                                                                                                                                                                                    align="right"
                                                                                                                                                                                                                    valign="top">



                                                                                                                                                                                                                </td>
                                                                                                                                                                                                            </tr>
                                                                                                                                                                                                        </tbody>
                                                                                                                                                                                                    </table>

                                                                                                                                                                                                </td>
                                                                                                                                                                                            </tr>
                                                                                                                                                                                        </tbody>
                                                                                                                                                                                    </table>
                                                                                                                                                                                </td>
                                                                                                                                                                                <td class="pc-grid-td-last pc-w620-itemsSpacings-15-20"
                                                                                                                                                                                    valign="middle"
                                                                                                                                                                                    style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 7.5px;">

                                                                                                                                                                                    <table
                                                                                                                                                                                        width="100%"
                                                                                                                                                                                        border="0"
                                                                                                                                                                                        cellpadding="0"
                                                                                                                                                                                        cellspacing="0"
                                                                                                                                                                                        role="presentation"
                                                                                                                                                                                        style="border-collapse: separate; border-spacing: 0; width: 100%;">
                                                                                                                                                                                        <tbody>
                                                                                                                                                                                            <tr>
                                                                                                                                                                                                <td class="pc-w620-halign-right pc-w620-valign-top"
                                                                                                                                                                                                    align="right"
                                                                                                                                                                                                    valign="middle">


                                                                                                                                                                                                    <table
                                                                                                                                                                                                        class="pc-w620-halign-right"
                                                                                                                                                                                                        align="right"
                                                                                                                                                                                                        width="100%"
                                                                                                                                                                                                        border="0"
                                                                                                                                                                                                        cellpadding="0"
                                                                                                                                                                                                        cellspacing="0"
                                                                                                                                                                                                        role="presentation"
                                                                                                                                                                                                        style="width: 100%;">
                                                                                                                                                                                                        <tbody>
                                                                                                                                                                                                            <tr>
                                                                                                                                                                                                                <td class="pc-w620-halign-right"
                                                                                                                                                                                                                    align="right"
                                                                                                                                                                                                                    valign="top">



                                                                                                                                                                                                                </td>
                                                                                                                                                                                                            </tr>
                                                                                                                                                                                                        </tbody>
                                                                                                                                                                                                    </table>

                                                                                                                                                                                                </td>
                                                                                                                                                                                            </tr>
                                                                                                                                                                                        </tbody>
                                                                                                                                                                                    </table>
                                                                                                                                                                                </td>
                                                                                                                                                                            </tr>
                                                                                                                                                                        </tbody>
                                                                                                                                                                    </table>
                                                                                                                                                                </td>
                                                                                                                                                            </tr>
                                                                                                                                                        </tbody>
                                                                                                                                                    </table>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </tbody>
                                                                                                                                    </table>

                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>

                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <table width="100%" border="0" cellpadding="0"
                                                                        cellspacing="0" role="presentation">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="center" valign="top"
                                                                                    style="padding: 20px;">

                                                                                    <table border="0" cellpadding="0"
                                                                                        cellspacing="0"
                                                                                        role="presentation" width="100%"
                                                                                        align="center"
                                                                                        style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td valign="top"
                                                                                                    align="center">
                                                                                                    <div class="pc-font-alt"
                                                                                                        style="line-height: 21px; letter-spacing: -0.2px; font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; font-variant-ligatures: normal; color: #000; text-align: center; text-align-last: center;">
                                                                                                        <div><span
                                                                                                                style="font-weight: 400;font-style: normal;color: #000">Don’t
                                                                                                                want to
                                                                                                                receive
                                                                                                                these
                                                                                                                emails?
                                                                                                            </span><a
                                                                                                                href="#"
                                                                                                                target="_blank"
                                                                                                                style="text-decoration: none; color: #000;"><span
                                                                                                                    style="text-decoration: underline;font-weight: 500;font-style: normal;color: #000;">Unsubscribe</span></a><span
                                                                                                                style="font-weight: 400;font-style: normal;color: #000;">
                                                                                                                or
                                                                                                            </span><a
                                                                                                                href="#"
                                                                                                                target="_blank"
                                                                                                                style="text-decoration: none; color: #000;"><span
                                                                                                                    style="text-decoration: underline;font-weight: 500;font-style: normal;color: #000">Manage
                                                                                                                    Preferences</span></a><span>&#xFEFF;</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>

                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- END MODULE: Footer -->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Fix for Gmail on iOS -->
    <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp;
        &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    </div>


</body>

</html>
    `;
};

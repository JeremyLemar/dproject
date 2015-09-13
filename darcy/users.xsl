<?xml version="1.0" encoding="ISO-8859-1"?>
<!-- Edited by XMLSpy® -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
  <h3>Users</h3>
    <table border="1">
      <tr bgcolor="#9acd32">
        <th>User Id</th>
        <th>User Name</th>
      </tr>
      <xsl:for-each select="TABLE/Row">
      <tr>
        <td><xsl:value-of select="UserId"/></td>
        <td><xsl:value-of select="UserName"/></td>
      </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>

<h2>:mag: Vulnerabilities of <code>actividad3g13:dev</code></h2>

<details open="true"><summary>:package: Image Reference</strong> <code>actividad3g13:dev</code></summary>
<table>
<tr><td>digest</td><td><code>sha256:7a5df2de0a5b5ce1d8ce805781faa13adbacc64f46ff84b2f581b728afd73135</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/high-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/medium-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>54 MB</td></tr>
<tr><td>packages</td><td>283</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>cross-spawn</strong> <code>7.0.3</code> (npm)</summary>

<small><code>pkg:npm/cross-spawn@7.0.3</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-21538?s=github&n=cross-spawn&t=npm&vr=%3E%3D7.0.0%2C%3C7.0.5"><img alt="high 7.5: CVE--2024--21538" src="https://img.shields.io/badge/CVE--2024--21538-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Inefficient Regular Expression Complexity</i>

<table>
<tr><td>Affected range</td><td><code>>=7.0.0<br/><7.0.5</code></td></tr>
<tr><td>Fixed version</td><td><code>7.0.5</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.132%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Versions of the package cross-spawn before 7.0.5 are vulnerable to Regular Expression Denial of Service (ReDoS) due to improper input sanitization. An attacker can increase the CPU usage and crash the program by crafting a very large and well crafted string.

</blockquote>
</details>
</details></td></tr>
</table>


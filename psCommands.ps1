#Powershell Script - Find log information for specific co-relation ID

Merge-SPLogFile -Path "C:\Users\amalhashim\Desktop\MergedLogs.log" -Correlation 28b89c9d-ad4e-300f-32e-60ea97196122 -Overwrite

#Powershell Script - Create host header sitecollection

New-SPSite http://mysite.com -HostHeaderWebApplication http://mywebapp.com/ -Name 'Site Title' 
-ContentDatabase WSS_Content_MySite -OwnerAlias 'domain\amalhashim' -language 1033 -Template 'STS#0'

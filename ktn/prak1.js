var a = [
{"Frage":"Was macht das Programm Ping?","Antwort":"Das Programm Ping sendet ICMP Requests an eine angegebene Internet-Adresse und zeigt die Antworten an. Anhand dieser Anworten l&auml;sst sich auf Latenz, Anzahl Knoten, etc. schlie&szlig;en.","Kurz":"Senden / Empfangen von ICMP Paketen"},
{"Frage":"Was macht das Programm Ping6?","Antwort":"Das selbe wie Ping nur mit dem Internet-Protokoll Version 6.","Kurz":"Ping auf IPv6"},
{"Frage":"Wie setzt man einen ICMP Request auf IPv6 unter Windows ab?","Antwort":"Mit dem Befehl Ping -6 <Addresse>","Kurz":"Ping -6"},
{"Frage":"Was bedeutet der Parameter -c bei Ping?","Antwort":"Mit dem Parameter -c wird die maximale Anzahl von zu senden Paketen angegeben","Kurz":"c = Count / Anzahl Pakete"},
{"Frage":"Was bedeutet der Parameter -R bei Ping?","Antwort":"Mit dem Parameter -R wird unter Ping eine genommene Route aufgezeichnet. Allerdings nur die letzten 9 Hops.","Kurz":"Route aufzeichnen"},
{"Frage":"Was ist der Roundtrip - Delay?","Antwort":"","Kurz":""},
{"Frage":"Was bedeutet der Parameter -t bei Ping unter Windows?","Antwort":"Sendet fortlaufend Ping Signale bis zu einem Abbruch durch ctrl-c. Unter Linux ist dieses die Voreinstellung und es muss kein optionaler Parameter angegeben werden.","Kurz":"Endloses senden von Ping."},
{"Frage":"Was bedeutet der Parameter -s bei Ping?","Antwort":"","Kurz":""},
{"Frage":"Wie kann man in Ping eine Funktion &auml;hnlich tracert nachbilden?","Antwort":"Man erh&ouml;ht die TTL mit jedem Schritt um 1, bis man am gew&uuml;nschten Ziel ist."},
{"Frage":"Was ist die maximale Paket-Size eines Ping Requests?","Antwort":"","Kurz":""},
{"Frage":"Wie gro&szlig; ist der ICMP Header.","Antwort":"Der ICMP Header ist 8 Byte gro&szlig;.","Kurz":"8 Byte"},
{"Frage":"Wie gro&szlig; ist ein IP Header","Antwort":"20 Byte","Kurz":"20 Byte"},
{"Frage":"Was ist ein A Record?","Antwort":"","Kurz":""},
{"Frage":"Was ist ein AAAA Record?","Antwort":"","Kurz":""},
{"Frage":"Was hei&szlig;t DNS?","Antwort":"","Kurz":""},
{"Frage":"Was macht das Programm traceroute?","Antwort":"","Kurz":""},

{"Frage":"Was hei&szlig;t HTTP?","Antwort":"Steht f&uuml;r Hyper Text Transfer Protokoll.","Kurz":""},
{"Frage":"Was ist ein Three-Way-Handshake?","Antwort":"","Kurz":""},
{"Frage":"Was macht Programm Telnet?","Antwort":"","Kurz":""},
{"Frage":"Was ist der Ping-Parameter um nicht fragmentierte Pakete zu senden?","Antwort":"Nur unter Windows! -f. Unter Linux ist es -M","Kurz":"-f  / -M","Befehl":"","Bild":"","FalscheAntwort":["","",""]},
{"Frage":"Was &auml;ndert sich bez&uuml;glich der Fragmentierung bei IPv6?","Antwort":"Routern ist es nicht mehr erlaubt Pakete zu fragmentieren. Ist das Paket gr&ouml;&szlig;er als die MTU des Routers wird eine Paket to Big Exception zur&uuml;ck gegeben.","Kurz":"Fragmentierung nicht mehr erlaubt.","Befehl":"","Bild":"","FalscheAntwort":["","",""]},
{"Frage":"Was ist das OSI Referenzmodell?","Antwort":"","Kurz":"","Befehl":"","Bild":"","FalscheAntwort":["","",""]},
{"Frage":"Wieviele Schichten hat das OSI Referenzmodell?","Antwort":"Das Osi Referenzmodell hat sieben Schichten.<br><br>1) physikalische Schicht<br>2) Verbindungsschicht<br>3) Netzwerkschicht<br>4) Transportschicht<br>5) Sitzungsschicht<br>6) Darstellungsschicht<br>7) Anwendungsschicht","Kurz":"7","Befehl":"","Bild":"","FalscheAntwort":["","",""]},
{"Frage":"Was hei&szlig;t ARP?","Antwort":"Address Resolution Protokoll","Kurz":"Address Resolution Protokoll","Befehl":"","Bild":[""],"FalscheAntwort":["","",""]},
{"Frage":"Welche Protokolle geh&ouml;ren zur Anwendungsschicht?","Antwort":"Http, Dns, Telnet, Smtp, Ftp","Kurz":"","Befehl":"","Bild":"","FalscheAntwort":["","",""]},
{"Frage":"Welche Protokolle geh&ouml;ren zur Transportschicht?","Antwort":"TCP, UDP","Kurz":"","Befehl":"","Bild":"","FalscheAntwort":["","",""]},
{"Frage":"Welche Protokolle geh&ouml;ren zur Netzwerkschicht?","Antwort":"ICMP, IPv6, IPv4","Kurz":"","Befehl":"","Bild":"","FalscheAntwort":["","",""]},
{"Frage":"Welche Protokolle geh&ouml;ren zur Verbindungsschicht?","Antwort":"Ethernet, SNAP, MAC, LLC","Kurz":"","Befehl":"","Bild":"","FalscheAntwort":["","",""]},
{"Frage":"Was bedeutet die Zeichenfolge * * * bei Traceroute?","Antwort":"Drei ICMP Requests sind Default Einstellung f&uuml;r Traceroute pro Hop. Drei Sternchen bedeuten, dass dieser Hop nicht geantwortet hat respektive ein Timeout entstanden ist.","Kurz":"","Befehl":"","Bild":"","FalscheAntwort":["","",""]},
{"Frage":"Welche Eintragungstypen gibt es in einer DNS-Datenbank?","Antwort":"","Kurz":"","Befehl":"","Bild":"","FalscheAntwort":["","",""]},
{"Frage":"F&uuml;r was steht SOA?","Antwort":"Start of Authority","Kurz":"Start of Authority","Befehl":"","Bild":"","FalscheAntwort":["","",""]},
{"Frage":"","Antwort":"","Kurz":"","Befehl":"","Bild":"","FalscheAntwort":["","",""]}
]
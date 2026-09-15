<!-- Generiert aus jumpstart_template.md – nicht von Hand bearbeiten. -->

# Jumpstart: Arbeitsumgebung einrichten

**Programming for Data Science & AI (PROG) – Herbstsemester 2026**<br>
Prof. Dr. Björn Jensen · <bjoern.jensen@hslu.ch>

Ziel dieser Anleitung: eine funktionierende Python-Umgebung in VS Code auf Ihrem eigenen Laptop, in etwa 20 Minuten – mit einer Cloud-Variante für den Fall, dass Ihr Laptop nicht mitspielt.

Sie müssen **nicht** alles hier verstehen. Arbeiten Sie die Schritte der Reihe nach ab, führen Sie am Schluss den Check aus, fertig. Das Verständnis kommt im Lauf des Semesters.

> **Alle Unterlagen liegen auf ILIAS:** <https://elearning.hslu.ch/ilias/><br>
> **Fragen zum Setup:** ILIAS-Forum "Fragen zum Setup" oder bjoern.jensen@hslu.ch

Bitte **vor der ersten Vorlesung** erledigen.

---

## 0. Welcher Weg?

| Situation | Weg |
|---|---|
| Eigener Laptop mit Windows 10/11, macOS 12+ oder Linux, auf dem Sie Software installieren dürfen | **Weg A: local** (empfohlen) |
| Verwalteter oder gesperrter Laptop, Chromebook, iPad, sehr altes Gerät – oder Weg A ist auch mit Hilfe nach 30 Minuten gescheitert | **Weg B: Browser** |

Versuchen Sie zuerst Weg A. Weg B ist ein Sicherheitsnetz für den Notfall – damit Sie mitarbeiten können, während wir Weg A gemeinsam zum Laufen bringen.

---

## Weg A: locale Installation

### A1. VS Code installieren

Herunterladen von <https://code.visualstudio.com> und mit den Standardeinstellungen installieren.

- **Windows:** Während der Installation *"Zu PATH hinzufügen"* ankreuzen, falls angeboten. Alles andere unverändert lassen.
- **Mac:** In den Programme-Ordner ziehen. Einmal öffnen, damit macOS aufhört zu fragen.

### A2. uv installieren

`uv` installiert Python und alle Pakete des Kurses für Sie. Es ist das Werkzeug, das heute in den meisten Firmen für Python verwendet wird – was Sie hier lernen, nehmen Sie also direkt in den Job mit. Es ersetzt die Installer von `python.org`, Anaconda, `pip` und das manuelle Anlegen virtueller Umgebungen. Falls Sie eines davon bereits installiert haben: stehen lassen, nichts deinstallieren, `uv` ignoriert es.

Terminal öffnen:

- **Windows:** `Win` drücken, `PowerShell` tippen, öffnen (keine Administratorrechte nötig).
- **Mac:** `Cmd+Leertaste`, `Terminal` tippen, öffnen.
- **Linux:** Sie wissen, wo es ist.

Eine Zeile einfügen und Enter drücken:

**Windows (PowerShell):**

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

**Mac / Linux:**

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

**Danach das Terminal schliessen und ein neues öffnen.** Dieser Schritt ist nicht optional – das neue Werkzeug ist nur in frisch geöffneten Terminals sichtbar.

Prüfen:

```
uv --version
```

Sie sollten eine Versionsnummer sehen. Erscheint "command not found" bzw. "wird nicht erkannt": siehe Problembehebung **P1**.

### A3. Das Umgebungs-Paket von ILIAS holen

1. Auf ILIAS (<https://elearning.hslu.ch/ilias/>) das Packet **`prog_hs26_umgebung.zip`** herunterladen. Darin steckt nur die Arbeitsumgebung – die Unterlagen der einzelnen Wochen kommen später einzeln dazu.
2. An einen **einfachen, lokalen** Ort entpacken. Es entsteht ein Order `prog-hs26`:
   - **Windows:** nach `C:\code\` (den Order `C:\code` selbst anlegen). **Nicht** under Dokumente, Desktop oder OneDrive.
   - **Mac / Linux:** nach `~/code/`

Danach sieht es so aus:

```
prog-hs26/
    pyproject.toml        ← daran erkennen Sie den richtigen Ordner
    uv.lock
    .python-version
    check.py
    00_check/check.ipynb
    jumpstart.md          ← diese Anleitung
    .vscode/
```

Warum das Theater mit dem Ort? Der Umgebungsordner enthält Tausende kleiner Dateien. OneDrive oder iCloud versuchen, sie alle hochzuladen, und bremsen dabei Ihren Laptop aus. Umlaute oder Leerzeichen im Pfad bringen gelegentlich Werkzeuge durcheinander. `C:\code` umgeht das alles.

**Dieses Packet laden Sie genau einmal herunter.** Es bleibt das ganze Semester stehen.

### A4. Umgebung im Terminal installieren

Bleiben Sie im Terminal aus A2 – dort hat `uv --version` funktioniert, also findet es `uv`. Haben Sie es inzwischen geschlossen, öffnen Sie einfach ein neues wie in A2.

1. In den Kursordner wechseln:

   **Windows (PowerShell):**

   ```powershell
   cd C:\code\prog-hs26
   ```

   **Mac / Linux:**

   ```bash
   cd ~/code/prog-hs26
   ```

2. Prüfen, dass Sie im richtigen Order stehen: `dir` (Windows) bzw. `ls` (Mac/Linux) muss `pyproject.toml` anzeigen. Fehlt die Datei, liegt der Kursordner eine Ebene tiefer – typisch under Windows, wo *Alle extrahieren* einen zusätzlichen Order anlegt. Dann mit `cd` noch eine Ebene hinein.
3. Die Umgebung installieren:

   ```
   uv sync
   ```

   Damit werden Python 3.14 und sämtliche Pakete des Kurses geladen (under 1 GB). Beim ersten Mal dauert das je nach Verbindung 1–5 Minuten. Under Windows bremst der Defender zusätzlich – Geduld, nicht abbrechen.

   Danach liegt im Kursordner ein verstecktes Verzeichnis `.venv`. Das ist Ihre Umgebung. Sie bearbeiten sie nie von Hand.

4. Gleich prüfen:

   ```
   uv run check.py
   ```

   Sie wollen lauter grüne Haken sehen und einen Pfad, der auf `.venv/…` endet (bzw. `.venv\…` under Windows). Das bestätigt, dass das Python des Kurses verwendet wird.

   > Die Meldungen des Checks sind englisch – so wie Fehlermeldungen in Python auch. Der Kurs selbst ist deutsch.

> **Lieber alles in VS Code?** Das geht auch: zuerst Schritt A5, dann dieselben Befehle im eingebauten Terminal ausführen (**Terminal ▸ Neues Terminal**). Es started automatisch im geöffneten Order, das `cd` entfällt. Danach aber VS Code einmal schliessen und den Order neu öffnen, damit VS Code die frisch angelegte `.venv` findet. Der Weg über das separate Terminal erspart Ihnen genau diesen Neustart.

### A5. Order in VS Code öffnen

1. VS Code ▸ **Datei ▸ Order öffnen…** ▸ `prog-hs26` wählen (den Order, der `pyproject.toml` enthält). Öffnen Sie immer den **Order**, nie eine einzelne Datei.
2. Fragt VS Code "Vertrauen Sie den Autoren?", auf **Ja** klicken.
3. Bietet VS Code an, die empfohlenen Erweiterungen zu installieren: **Installieren**.

Hat VS Code nicht gefragt, installieren Sie die drei Erweiterungen von Hand: Erweiterungs-Panel öffnen (`Ctrl+Shift+X` / `Cmd+Shift+X`), den Namen suchen, **Installieren**. Achten Sie auf den Herausgeber in Klammern – es gibt Nachahmer mit ähnlichen Namen.

| Erweiterung | Was sie tut |
|---|---|
| **Python** (Microsoft) | Macht VS Code zur Python-Umgebung: Farben im Code, Vervollständigung beim Tippen, Hinweise auf Fehler, der ▶-Knopf für Skripte, der Debugger – und die Auswahl der Umgebung `.venv`. |
| **Jupyter** (Microsoft) | Öffnet Notebooks (`.ipynb`) direkt in VS Code, führt Zellen aus und zeigt Tabellen und Diagramme darunter an. Oben rechts wählen Sie den Kernel. |
| **Ruff** (Astral) | Liest Ihren Code mit, markiert verdächtige Stellen und bringt Code auf Wunsch in eine einheitliche Form. Vom selben Hersteller wie `uv`. |

**Ruff etwas genauer.** Ruff hat zwei Aufgaben:

- **Prüfen.** Schon während Sie tippen, unterstreicht Ruff Stellen, die fast sicher ein Fehler oder ein Versehen sind. Fahren Sie mit der Maus darüber, steht dort die Begründung. Für diesen Kurs ist es bewusst mild eingestellt; es meldet zum Beispiel:
  - einen Namen, der nirgends definiert ist – meist ein Tippfehler im Variablennamen,
  - Importe und Variable, die nie verwendet werden,
  - `x == None` statt `x is None`,
  - ein nacktes `except:`, das jeden Fehler verschluckt,
  - `"\d+"` statt `r"\d+"` in regulären Ausdrücken.

  Stilfragen wie Zeilenlänge oder Namensgebung meldet es nicht.
- **Formatieren.** Ruff vereinheitlicht Einrückung, Leerzeichen, Zeilenumbrüche und Anführungszeichen. Am Verhalten des Programs ändert das nichts, nur am Aussehen. **Es passiert nie von selbst**, sondern nur, wenn Sie es verlangen: `Shift+Alt+F` (Windows) bzw. `Shift+Option+F` (Mac) für die offene Datei, oder im Terminal `uv run ruff format .` für den ganzen Order.

> Ruff findet, was man dem Code **ansieht**. Ein Programm, das sauber durchläuft und trotzdem das Falsche berechnet, erkennt es nicht – dafür braucht es Sie.

### A6. Den Check im Notebook ausführen

Die erste Hälfte des Checks lief schon im Terminal (A4). Jetzt die zweite, in VS Code:

1. `00_check/check.ipynb` im Datei-Explorer links öffnen.
2. Oben rechts nachsehen. Dort sollte bereits etwas wie **`.venv (Python 3.14.x)`** stehen. Steht dort **Kernel auswählen**, darauf klicken ▸ **Python-Umgebungen…** ▸ den `.venv`-Eintrag wählen.
3. Die erste Zelle ausführen (`Shift+Enter`).

Gleiche Ausgabe, gleiche grüne Haken, gleicher `.venv`-Pfad wie in A4. Zeigt der Pfad etwas anderes (`/usr/bin/python`, `AppData\Local\Programs\Python`, `anaconda3` …), haben Sie den falschen Kernel gewählt: Schritt 2 wiederholen.

**Beide Checks grün: Sie sind fertig. Willkommen.**

---

## Weg B: im Browser arbeiten (Google Colab)

Wenn auf Ihrem Gerät nichts zu installieren geht, arbeiten Sie vorübergehend in **Google Colab**. Dort läuft Python auf einem Rechner von Google, Sie brauchen nur einen Browser und ein Google-Konto. Pandas, NumPy und Matplotlib sind bereits vorhanden.

### B1. Notebook öffnen

1. Das Wochenpaket von ILIAS herunterladen und entpacken.
2. <https://colab.research.google.com> öffnen, mit einem Google-Konto anmelden.
3. **Datei ▸ Notebook hochladen** und das `.ipynb` aus dem Wochenordner auswählen.

### B2. Datendateien mitnehmen

Notebooks, die Daten einlesen (`data/vgsales.csv` und ähnlich), brauchen diese Dateien auch in Colab:

1. Links auf das Ordnersymbol klicken.
2. Die CSVbzw. Excel-Dateien per Drag-and-drop hineinziehen.
3. Im Notebook den Pfad anpassen: aus `data/vgsales.csv` wird `vgsales.csv`.

### B3. Was Sie dabei beachten müssen

- **Ihre Arbeit ist nach dem Schliessen weg**, wenn Sie sie nicht sichern: **Datei ▸ Kopie in Google Drive speichern** oder **Datei ▸ Herunterladen ▸ .ipynb**.
- Fehlt ein Packet, installieren Sie es in Colab ausnahmsweise mit `!pip install <paket>` in einer Zelle. Das ist **nur in Colab** erlaubt – local gilt weiterhin die Regel weiter unten.
- Die Versionen in Colab sind nicht exakt unsere. In seltenen Fällen verhält sich etwas anders.
- Die Turtle-Grafiken der Coding-Projekte laufen in Colab **nicht**.

Weg B ist also Überbrückung gedacht. Kommen Sie in die Coding-Session am Montag, dann bringen wir Weg A gemeinsam zum Laufen.

## Der Alltag

**Wir arbeiten in VS Code.** Das ist der Weg, den wir in der Vorlesung zeigen und den wir supporten.

1. VS Code öffnen: **Datei ▸ Zuletzt verwendet ▸ `prog-hs26`**. Immer den Order öffnen, nie eine einzelne Datei.
2. Links im Explorer das Notebook oder die `.py`-Datei der Woche anklicken.
3. Notebooks: oben rechts prüfen, dass also Kernel **`.venv`** steht, dann Zelle für Zelle mit `Shift+Enter`.
4. Skripte: auf ▶ klicken, oder im Terminal `uv run s03_funktionen/beispiel.py`.

### Neues Material einsortieren

Jede Woche laden Sie auf ILIAS ein oder mehrere ZIP-Pakete herunter – die Vorlesung, die Hausaufgabe, die Besprechung. **Entpacken Sie sie direkt in Ihren Order `prog-hs26`.** Danach liegt dort zum Beispiel:

```
prog-hs26/
    pyproject.toml
    s01_algorithmen_und_python/
    s02_kontrollanweisungen/
    s03_funktionen/
    …
```

Kommen dabei neue Pakete dazu, sagen wir das ausdrücklich. Dann laden Sie das aktualisierte Umgebungs-Paket herunter, ersetzen damit `pyproject.toml` und `uv.lock` und führen noch einmal `uv sync` aus. Das ist die gesamte Update-Prozedur.

### Die Befehle, die Sie brauchen

| Befehl | Was er tut |
|---|---|
| `uv sync` | Installiert bzw. aktualisiert alles aus `pyproject.toml` (legt `.venv` an oder repariert sie) |
| `uv run check.py` | Prüft die Umgebung |
| `uv run <datei.py>` | Führt ein Skript in der Umgebung aus |
| `uv run pytest` | Führt Tests aus (ab SW13) |
| `uv run ruff format .` | Formatiert Ihren Code |

<!-- `uv run jupyter lab` öffnet JupyterLab im Browser. In diesem Kurs
	 arbeiten wir aber durchgehend in VS Code - bleiben Sie dabei, dann
	 sehen Sie dasselbe wie wir in der Vorlesung. -->

`uv add` lernen Sie später im Semester kennen. Noch nicht jetzt.

### Eine Regel

**Führen Sie in diesem Kurs niemals `pip install` oder `conda install` aus.** Wenn Sie meinen, ein Packet fehle, sagen Sie uns Bescheid – wir nehmen es für alle in `pyproject.toml` auf. Anleitungen im Internet schreiben `pip install pandas`; in diesem Kurs lautet die Übersetzung "ist schon installiert". Später lernen Sie die richtige Übersetzung: `uv add pandas`.

---

## Was im Order liegt (für Neugierige)

| Datei | Bedeutung |
|---|---|
| `pyproject.toml` | Die Liste der Pakete, die dieser Kurs braucht. Menschenlesbar. Die Standarddatei jedes Python-Projekts. |
| `uv.lock` | Die exakten Versionen, die alle bekommen. Generiert, nie von Hand bearbeiten. Sorgt dafür, dass Ihre Umgebung mit unserer identisch ist. |
| `.python-version` | Welches Python. Aktuell `3.14`. |
| `.venv/` | Die installierte Umgebung. Versteckt. Löschen und `uv sync` ausführen baut sie neu. |
| `.vscode/` | Einstellungen, damit sich VS Code bei allen gleich verhält. |
| `check.py` | Der Umgebungs-Check aus den Schritten A4 und A6. |

Zwei Paketgruppen sind **nicht** im Standardumfang, weil sie zusätzliche<br>
Voraussetzungen haben. Sie brauchen sie nur, wenn wir es ausdrücklich sagen:

```
uv sync --group gcp     # Google BigQuery (eine Live-Demo in SW12)
uv sync --group extra   # SVG-Export der L-Systeme, interaktive Plots
```

---

## Problembehebung

**P1. `uv` wird nach der Installation nicht erkannt.**<br>
Sie haben kein *neues* Terminal geöffnet. Terminal schliessen, ein neues öffnen, noch einmal versuchen – arbeiten Sie im Terminal von VS Code, dann VS Code ganz schliessen und neu öffnen. Scheitert es under Windows weiterhin: `Win` drücken, "Umgebungsvariablen" tippen, *Umgebungsvariablen für dieses Konto bearbeiten* öffnen und prüfen, ob `Path` den Eintrag `C:\Users\<Sie>\.local\bin` enthält. Falls nicht: hinzufügen, dann Terminal bzw. VS Code neu starten.

**P2. Windows: "Die Ausführung von Skripts ist auf diesem System deaktiviert".**<br>
Ihre PowerShell blockiert Skripte. Der Installationsbefehl oben umgeht das für die Installation selbst. Meldet das Terminal von VS Code es später (meist beim Aktivieren von `.venv`), in PowerShell ausführen:<br>
`Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` und mit J bestätigen. Ist auch das blockiert, wird Ihr Laptop von einer Organisation verwaltet: nehmen Sie Weg B. (Hinweis: `uv run` funktioniert auch ohne Aktivierung – Sie können die Meldung also auch ignorieren.)

**P3. `uv sync` ist langsam oder scheint zu hängen.**<br>
Under Windows prüft der Defender jede entpackte Datei. Warten Sie; auf einer langsamen Festplatte sind ein paar Minuten normal. Dauert es länger also 15 Minuten: mit `Ctrl+C` abbrechen, prüfen, dass Ihr Order nicht in OneDrive liegt, und neu starten. Prüfen Sie auch den freien Speicherplatz – Sie brauchen etwa 2 GB.

**P4. `uv sync` scheitert mit einem Netzwerk-, SSLoder TLS-Fehler.**<br>
Hochschulund Firmen-WLAN fangen Downloads manchmal ab. Testen Sie es einmal über einen Handy-Hotspot. Funktioniert es dort, melden Sie sich bei uns: dafür gibt es eine Proxy-Einstellung.

**P5. `uv sync` findet Python 3.14 nicht oder kann es nicht laden.**<br>
`uv` lädt Python selbst herunter; normalerweise ist dafür nichts zu tun. Scheitert es, führen Sie `uv python install 3.14` einzeln aus, lesen Sie die Fehlermeldung und versuchen Sie `uv sync` erneut. Bleibt es hängen: siehe P4 oder melden Sie sich bei uns.

**P6. Die Kernel-Auswahl im Notebook zeigt `.venv` nicht an.**<br>
VS Code ganz schliessen, Order neu öffnen, 10 Sekunden warten, noch einmal versuchen. Immer noch nichts: in der Kernel-Auswahl *Anderen Kernel auswählen ▸ Python-Umgebungen ▸ Interpreterpfad eingeben* wählen und einfügen:
- Windows: `C:\code\prog-hs26\.venv\Scripts\python.exe`
- Mac/Linux: `~/code/prog-hs26/.venv/bin/python`

**P7. `uv run check.py` zeigt ein Python, das nicht in `.venv` liegt.**<br>
Sie führen den Befehl ausserhalb des Kursordners aus. Wechseln Sie mit `cd` zuerst in den Order, der `pyproject.toml` enthält (siehe A4). In VS Code öffnet das Terminal dort automatisch, sofern Sie den *Order* geöffnet haben und nicht eine einzelne Datei.

**P8. Mac: "xcrun: error" oder eine Meldung zu den Command Line Tools.**<br>
`xcode-select --install` ausführen, bestätigen, warten, `uv sync` wiederholen. (Selten; die meisten Macs brauchen das nicht.)

**P9. Letzte Woche lief alles, jetzt scheitern die Imports.**<br>
Noch einmal `uv sync` ausführen – Sie haben vermutlich eine neue Fassung des Kursordners mit neuen Paketen geladen.

**P10. Ich habe schon Anaconda / ein Python von python.org / Homebrew-Python.**<br>
Kein Problem. Lassen Sie es in Ruhe. Achten Sie nur darauf, bei der Kernel-Auswahl `.venv` zu nehmen und nicht das von Anaconda. Erscheint `(base)` in Ihrer Terminal-Eingabeaufforderung, ist das harmlos; mit `conda config --set auto_activate_base false` verschwindet es dauerhaft.

**P11. Es ist gründlich kaputt und ich will neu anfangen.**<br>
Löschen Sie den Order `.venv` im Kursordner und führen Sie `uv sync` aus. Damit ist in einer Minute alles neu gebaut. Ihre Notebooks und Dateien bleiben unangetastet.

**P12. Nichts davon funktioniert.**<br>
Weg B (Colab), damit Sie nicht stillstehen – und dann in die Coding-Session am Montag. Dort bringen wir Weg A gemeinsam zum Laufen.

---

## Spickzettel

```
uv installieren (Windows):  powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
uv installieren (Mac/Linux): curl -LsSf https://astral.sh/uv/install.sh | sh
Kursordner:                 C:\code\prog-hs26   |   ~/code/prog-hs26
In den Kursordner wechseln:  cd C:\code\prog-hs26   |   cd ~/code/prog-hs26
Wochenpakete:               von ILIAS, in genau diesen Ordner entpacken
Umgebung installieren:      uv sync
Check:                      uv run check.py   (+ Zelle in 00_check/check.ipynb ausführen)
Kernel wählen:              .venv
Skript ausführen:           uv run datei.py
Niemals:                    pip install, conda install
Alles neu bauen:            .venv löschen, dann uv sync
Notfall im Browser:         colab.research.google.com ▸ Datei ▸ Notebook hochladen
```

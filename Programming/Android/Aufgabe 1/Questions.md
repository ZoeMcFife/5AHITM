# Aufgabe 1
## Grundlagen, Geschichte und Installation Android

### Fragen

<hr>

**Was versteht man unter der Abkürzung ART und dem Begriff Dalvik-VM.**

- ART : Android runtime
- Dalvik-VM : virtuelle ausführungs umgebung für mobile geräte, durch ART ersetzt

**Welche Verbesserung bringt ART ab welcher Android Version?**

- Ab Android 5.0 Lollipop
- Ahead of Time Compilation
- bessere Garbage Collection
- verbesserte development und debugging features

<hr>

**Ab welcher Version wurde das Berechtigungssystem grundlegend verbessert?**

- Android 6

- Android 11

**Was war die Verbesserung?**

- 6
    - Runtime Permissions (po-up dialog)
    - Berechtigungs gruppen
    - Berechtigungen nicht zulassen können

- 11
    - one time permissions
    - auto reset
    - permission dialogs
    - mehr granulare berechtigungen

<hr>

**Nenne zwei Features die ab Android 7 – Nougat hinzugekommen sind.**

- Multitasking Windows
- Better notifications (groups, ...)

<hr>

**Was ist die momentane aktuelle Version von Android?**

- Android 14 

**Wann ist diese erschienen?**

- October 4, 2023

<hr>

**Was ist der Unterschied zwischen JDK und JRE?**

- **J**ava **D**evelopment **K**it
- **J**ava **R**untime **E**nvironment

- JRE
    - alles was nötig ist um ein Java Program auszuführen (JVM, ...)

- JDK
    - Includiert alles von JRE
    - Compiler und weitere dev tools

**Was wird für die Android-Entwicklung gebraucht?**

- JDK

<hr>

**Erkläre den Zusammenhang folgender Begriffe:**

- **javac**
    - Java Compiler
- **dx**
    - java bytecode to .dex Dalvik Exectuable Format
- **Bytecode**
    - Zwischencode der von JVM ausgeführt wird
- ***.dex**
    - Dalvik Executable Format
- ***.apk**
    - Android Package Format

<hr>

**Wieso ist ab Nougat wieder ein JustInTime-Compiler dabei?**

- Schnellere installationszeiten
- Weniger storage verbrauch
- Laufzeit optimierungen

<hr>

**Was versteht man unter Jack?**

- Android Toolchain, der Java Source Code in Dex Bytecode kompiloerte

**was hat dieser abgelöst**

- dx tools

<hr>

**Was bedeutet der Einsatz von Jack für die Java-Programmierung?**

- vereinfachter build prozess und bessere unterstützung von java features

<hr>

**In welcher Datei muss Jack aktiviert werden?**

- build.gradle

<hr>

**Erkläre den Zusammenhang folgender Begriffe:**

- **HAL**
- **Linux-Kernel**
- **Activity-Manager**
- **Kameradienst**
- **MediaServer**
- **SystemServer**
- **Binder-IPC**
- **Application Framework**

<hr>

**Erkläre die Kernbestandteile des Application Frameworks jeweils mit einem Satz:**

- **View**
- **Notification Manager**
- **Content Provider**
- **Resource Manager**
- **Activity Manager**

<hr>

**Was versteht man unter HAXM?**

<hr>

**Was versteht man unter dem Begriff ADB?**

<hr>
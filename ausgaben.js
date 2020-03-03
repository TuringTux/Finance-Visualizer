displaytext = function(event) {
  $('#ausgabenname').text(this.name);
  $('#ausgabenvalue').text('Betrag: ' + Number(this.value).toLocaleString("de-DE", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' €');
  $('#ausgabentext').html(this.text);
}

var data = [
{
  'id': '0.0',
  'parent': '',
  'title': 'Ausgaben',
  'name': 'Ausgaben 2019',
  'text': 'Damit die Fachschaft ihren Aufgaben nachkommen kann, sind verschiedene Ausgaben nötig. Die Mittel, die zum Ende des Haushaltsjahres nicht verausgabt wurden, fließen an die zentrale Ebene der Verfassten Studierendenschaft zurück.<br>Die Unterposten im Diagramm kann man durch Anklicken auswählen.',
},
  {
    'id': '0.10',
    'parent': '0.0',
    'title': 'Büroausstattung',
    'name': 'Büroausstattung',
    'text': 'Um Verwaltungsarbeiten, die im Rahmen der Fachschaftsarbeit anfallen (z.B. Verwaltung der Finanzen), sachgemäß durchführen zu können, muss regelmäßig Büromaterial nachbeschafft werden. Dazu hat die Fachschaft einen Kundenaccount bei Büro Mix, über den unter den Bedinungen des Rahmenvertrages zwischen der Universität und Büro Mix das benötigte Büromaterial zu günstigen Preisen beschafft werden kann.',
  },
    {
      'id': '0.10.0',
      'parent': '0.10',
      'title': 'Theoretikumsschränke',
      'name': 'Theoretikumsschränke',
      'text': '',
      'value': 1309.71,
    },
    {
      'id': '0.10.1',
      'parent': '0.10',
      'title': 'Theoretikumskarten',
      'name': 'Theoretikumskarten',
      'text': '',
      'value': 4.35,
    },
  {
    'id': '0.1',
    'parent': '0.0',
    'title': 'Sonstiges, weitere Austattung',
    'name': 'Sonstiges, weitere Ausstattung',
    'text': 'Um Verwaltungsarbeiten, die im Rahmen der Fachschaftsarbeit anfallen (z.B. Verwaltung der Finanzen), sachgemäß durchführen zu können, muss regelmäßig Büromaterial nachbeschafft werden. Dazu hat die Fachschaft einen Kundenaccount bei Büro Mix, über den unter den Bedinungen des Rahmenvertrages zwischen der Universität und Büro Mix das benötigte Büromaterial zu günstigen Preisen beschafft werden kann.',
  }, 
    {
      'id': '0.1.0',
      'parent': '0.1',
      'title': 'Schraubzwingen',
      'name': 'Schraubzwingen',
      'text': '',
      'value': 27.80,
    },
    {
      'id': '0.1.1',
      'parent': '0.1',
      'title': 'Schmutzradierer',
      'name': 'Schmutzradierer',
      'text': '',
      'value': 4.47,
    },
    {
      'id': '0.1.2',
      'parent': '0.1',
      'title': 'Waffeleisen',
      'name': 'Waffeleisen',
      'text': '',
      'value': 77.98,
    },
  {
    'id': '0.2',
    'parent': '0.0',
    'title': 'EDV',
    'name': 'EDV',
    'text': '',
  },
    {
      'id': '0.2.0',
      'parent': '0.2',
      'title': 'Server',
      'name': 'Server',
      'text': '',
      'value': 935.90,
    },
    {
      'id': '0.2.1',
      'parent': '0.2',
      'title': 'Beamer',
      'name': 'Beamer',
      'text': '',
      'value': 928.89,
    },
    {
      'id': '0.2.2',
      'parent': '0.2',
      'title': 'Router',
      'name': 'Router',
      'text': '',
      'value': 56.88,
    },
    {
      'id': '0.2.3',
      'parent': '0.2',
      'title': 'Tablets',
      'name': 'Tablets',
      'text': '',
      'value': 483.52,
    },
    {
      'id': '0.2.4',
      'parent': '0.2',
      'title': 'Laserdrucker',
      'name': 'Laserdrucker',
      'text': '',
      'value': 201.02,
    },
  {
    'id': '0.3',
    'parent': '0.0',
    'title': 'Druck- und Kopierkosten',
    'name': 'Druck- und Kopierkosten',
    'text': '<p>Die Fachschaft betreibt in ihrem Büro einen eigenen Drucker, um alltäglich anfallende Dokumente und Unterlagen bei Bedarf schnell und unkompliziert drucken zu können. Um diesen Drucker in Betrieb zu halten, müssen regelmäßg Papier und Toner beschafft werden.</p><p> Für Veranstaltungen muss der Druck von Plakaten, Flyern und ähnlichem meist extern in Auftrag gegeben werden.</p>',
  },
    {
      'id': '0.3.0',
      'parent': '0.3',
      'title': 'Druckkosten',
      'name': 'Druckkosten',
      'text': '',
      'value': 243.33,
    },
    {
      'id': '0.3.1',
      'parent': '0.3',
      'title': 'Fixiereinheit Drucker',
      'name': 'Fixiereinheit',
      'text': '',
      'value': 199.71,
    },
 {
    'id': '0.4',
    'parent': '0.0',
    'title': 'Stadtmobil',
    'name': 'Transportkosten (Stadtmobil)',
    'text': 'Die VS hat bei dem Carsharing-Dienst Stadtmobil ein Kundenkonto, über das PKW bis zur Größe von Kastenwägen ausgeliehen werden können. Mit diesen Fahrzeugen können Einkäufe für größere Veranstaltungen (z.B. die Vollversammlungen) erledigt werden und auch die Reise zu Bundesfachschaftentagungen und anderen Konferenzen außerhalb Heidelbergs durchgeführt werden, da dies in manchen Situation günstiger ist als mit der Bahn oder anderen Alternativen zu reisen.',
  },
    {
      'id': '0.4.0',
      'parent': '0.4',
      'title': 'Stadtmobil',
      'name': 'Stadtmobil',
      'text': '',
      'value': 607.35,
    },
    {
      'id': '0.4.1',
      'parent': '0.4',
      'title': 'Science Spreadders',
      'name': 'Science Spreadders',
      'text': '',
      'value': 5.52,
    },
  {
    'id': '0.5',
    'parent': '0.0',
    'title': 'Bewirtung',
    'name': 'Bewirtungskosten',
    'text': '<p>Im Lauf des Haushaltsjahres richtet die Fachschaft meist auch eine Reihe kleinerer Veranstaltungen wie beispielsweise Berufsinformationsveranstaltungen (meist als “Wissenschaftler im Beruf” betitelt) oder Treffen, bei denen sich Tutor*innen über die Erfahrungen in ihren Übungsgruppen austauschen können. Da viele dieser Veranstaltungen nach Ende der meisten Lehrveranstaltungen um 18:00 beginnen und bis in den späten Abend gehen, ist es oft angemessen für die Teilnehmer Verpflegung bereitzustellen, damit diese nicht gezwungen sind, eine Veranstaltung vorzeitig zu verlassen, um zu Abend zu essen.</p><p>Weiterhin finden jedes Semester einige Gremiensitzungen der Fachschaft und Arbeitstreffen statt, die so lange dauern, dass eine Verpflegung notwendig ist, um die Arbeit sinnvoll zu Ende führen zu können. Ein Beispiel hierfür wäre das Abtippen der Lehrevaluation in der Physik, wofür mehrere Fachschaftler meist von Samstagvormittag bis in den frühen Abend brauchen, weshalb die Fachschaft in den vergangen Jahren für eine Bewirtung zu Mittag gesorgt hat</p>',
  },
    {
      'id': '0.5.0',
      'parent': '0.5',
      'title': 'Aufräumaktion',
      'name': 'Aufräumaktion',
      'text': '',
      'value': 41.09,
    },
    {
      'id': '0.5.1',
      'parent': '0.5',
      'title': 'Arbeitstreffen Website',
      'name': 'Arbeitstreffen Website',
      'text': '',
      'value': 77.29,
    },
  {
    'id': '0.6',
    'parent': '0.0',
    'title': 'Reise- und<br>Teilnahme',
    'name': 'Reise- und Teilnahmekosten',
    'text': 'Aktive Mitglieder der Fachschaften nehmen im Laufe des Jahres an verschiedenen Tagungen und Konferenzen außerhalb Heidelbergs teil, wobei Reise- und Teilnahmekosten anfallen. Eine repräsentative aber nicht zwangsläufig vollständige Auswahl dieser Veranstaltungen findet sich im Folgenden:<ul><li>Bundesfachschaftentagungen und Konferenzen von Verbänden, die unter Posten 45 aufgeführt sind. Die Teilnahme an diesen Tagungen bringt für die Fachschaft die folgenden Vorteile: <ul> <li> Die fachlichen oder hochschulpolitischen Interessen der Studierenden können auch auf einer überregionalen Ebene vertreten werden. Dies ist insbesondere interessant bei Themen mit einer überregionalen Dimension (z.B. Gesetzesnovellen auf Bundes- oder Landesebene) oder bei Themen, für die andere überregionale Gremien (wie z.B. die Hochschulrektorenkonferenz) Rahmenordnungen o.ä. erstellen, die bei der Umsetzung eines Sachverhaltes auf Ebene der Fakultäten oft eine sehr wichtige Rolle spielen. </li><li> Überregionalen Studierendenbeziehungen können so sehr günstig und nachhaltig etabliert und gepflegt werden. Der Austausch mit Studierndenvertretern anderer Universitäten und deren Erfahrungen vereinfacht Gremienvertretern der Fachschaft die Arbeit in Gremien in Heidelberg oft erheblich und eröffnet neue Perspektiven auf Probleme, die an anderen Universitäten eventuell bereits gelöst wurden.</li><li> Die Pflege der Mitgliedschaft in den Verbänden, die unter Posten 45 aufgeführt werden.</ul></li><li>Studentische Akkreditierungsseminare und Poolvernetzungstreffen (PVT). Auf sutdentischen Akkreditierungsseminaren werden Teilnehmenden die Grundlagen von Programmakkreditierung vermittelt, sodass sie im Anschluss qualifiziert sind als studentische Gutachter an Akkreditierungsverfahren teilzunehmen. Die bei der Schulung und bei Akkreditierungsverfahren an anderen Universitäten gesammelten Erfahrungen kommen den Gremienvertretern auch bei ihrer Arbeit in den Gremien der Universität zugute, sodass die Fortbildung im Interesse der Fachschaft ist. Weiterhin nimmt die Fachschaft nach §65 LHG BaWü an den Aufgaben der Hochschule nach §§2 bis 5 teil, worunter Qualitätssicherung an den Hochschulen zählt und somit Akkreditierung. Auf den PVT treffen sich Vertreter des studentischen Akkrediterungspools, um aktuelle Entwicklungen und veränderte Regelungen im Akkreditierungswesen zu diskutieren und zu ihnen Stellung zu beziehen. Das bietet die Gelegenheit das Akkreditierungswesen gemäß der Interessen der Heidelberger Studierenden weiterzuentwickeln.</li><li>Außerdem bietet sich Finanzverantwortlichen und anderen Amtsträgern unregelmäßig die Möglichkeit, an Schulungen teilzunehmen, die ihnen jurisitsche und formale Grundlagen ihrer Aufgaben vermitteln, die für Studierende, die ihre Tätigkeit ehrenamtlich ausüben, oft nur schwer zu durchschauen sind. Für die ordnungsgemäße Verwaltung der Angelegenheit ist es allerdings unerläßlich, dass diese Amtsträger adäquat auf ihre Aufgaben vorbereitet und über diese informiert sind.</li>',
  },
    {
      'id': '0.6.0',
      'parent': '0.6',
      'title': 'PVT',
      'name': 'Pool-Vernetzungstreffen',
      'text': '',
      'value': 217.40,
    },
    {
      'id': '0.6.1',
      'parent': '0.6',
      'title': 'KoMa',
      'name': 'Konferenz der Mathematikfachschaften',
      'text': '',
      'value': 229.50,
    },
    {
      'id': '0.6.2',
      'parent': '0.6',
      'title': 'StAPF',
      'name': 'Ständiger Ausschuss aller Physikfachschaften',
      'text': '',
      'value': 262.00,
    },
    {
      'id': '0.6.3',
      'parent': '0.6',
      'title': 'ZaPF',
      'name': 'Zusammenkunft aller Physikfachschaften',
      'text': '',
      'value': 479.40,
    },
    {
      'id': '0.6.4',
      'parent': '0.6',
      'title': 'KIF',
      'name': 'Konferenz der Informatikfachschaften',
      'text': '',
      'value': 2095.10,
    },
  {
    'id': '0.7',
    'parent': '0.0',
    'title': 'Mitgliedsbeiträge',
    'name': 'Mitgliedsbeiträge',
    'text': '<p>Unsere SFSen sind Mitglied in verschiedenen Verbänden und Dachorganisationen; derzeit sind das die "Deutsche Mathematiker Vereinigung" (DMV), "Zusammenkunft aller Physikfachschaften e.V." (ZaPF e.V.), "Konferenz der Mathematikfachschaften e.V." (KoMa e.V.) und "Konferenz der Informatik Fachschaften e.V." (KIF e.V.).</p><p>In diesen Verbänden sind die SFSen Mitglied, weil sie sich mit Themen der Lehre in den jeweiligen Fächern auseinandersetzen und auf eine Weiterentwicklung dieser im Sinne der Studierenden hinarbeiten. Die Mitgliedschaft unterstützt diese Verbände dabei, ihre Tätigkeit auch langfristig fortsetzen zu können und ermöglicht es Mitgliedern der Fachschaften an Tagungen und Konferenzen der Verbände teilzunehmen und dort die Interessen der Heidelberger Studierenden zu vertreten.</p>',
  },
    {
      'id': '0.7.0',
      'parent': '0.7',
      'title': 'DMV',
      'name': 'Deutsche Mathematiker-Vereinigung',
      'text': '',
      'value': 210.00,
    },
    {
      'id': '0.7.1',
      'parent': '0.7',
      'title': 'KIF e.V.',
      'name': 'Mitgliedschaftsbeitrag KIF e.V.',
      'text': '',
      'value': 60.00,
    },
    {
      'id': '0.7.2',
      'parent': '0.7',
      'title': 'ZaPF e.V.',
      'name': 'Mitgliedschaftbeitrg ZaPF e.V.',
      'text': '',
      'value': 100.00,
    },
  {
    'id': '0.8',
    'parent': '0.0',
    'title': 'Veranstaltungen und Projekte',
    'name': 'Veranstaltungen und Projekte',
    'text': '',
  },
    {
      'id': '0.8.0',
      'parent': '0.8',
      'title': 'Fachschaftswochenende',
      'name': 'Fachschaftswochenende',
      'text': '<p>Einmal im Semester organisiert die Fachschaft das Fachschaftswochende (FSWE):</p><p>Während des FSWE fahren aktive Fachschaftler*innen der SFSen Physik, Mathematik und Informatik gemeinsam in ein Landheim im Odenwald, um dort zusammen an größeren inhaltlichen Themen zu arbeiten, die Diskussionen zu führen, für die während derWoche und den zeitlich begrenzten Sitzungen keine Zeit bleibt und um langfristige Projekte voranzutreiben. Dazu finden im Lauf des Samstag mehrere Arbeitskreise statt und am Sonntag das Abschlussplenum, in dem die Ergebnisse der AKs vorgestellt und diskutiert werden. In einem Gremienplanspiel werden außerdem die neuen aktiven Fachschaftsmitglieder, die noch keine Gremienerfahrung haben, auf ihre zukünftigen Ämter vorbereitet. Es ist üblich, dass die Teilnehmenden, die nicht zum ersten Mal auf dem FSWE sind, eine Eigenbeteiligung von 10e entrichten, da die Teilnehmenden während des Wochenendes mit Essen, Snacks und Getränken versorgt werden.</p><p> Durch das FSWE ermöglicht die Fachschaft den Meinungsaustausch in der Gruppe der Studierenden und durch die auf dem FSWE erstellten Konzepte und durch die Ausbildung von Nachwuchs für universitäre Gremien werden langfristig die hochschulpolitischen Belange der Studierenden wahrgenommen.</p><p>Da auf dem FSWE der Fokus eindeutig auf inhaltlicher Arbeit, Fortbildung für Gremienarbeit und Stärkung des sozialen Zusammenhalts unter den aktiven Fachschaftsmitgliedern liegen soll, ist vorgesehen, dass nur aktive Fachschaftler (also meist solche, die ein Amt ausüben) und Einsteiger, die ein ernstzunehmendes Interesse daran haben, in Zukunft an der inhaltlichen Arbeit der Fachschaft teilzunehmen, am FSWE teilnehmen.</p>',
      'value': 4366.29,
    },
    {
      'id': '0.8.1',
      'parent': '0.8',
      'title': 'Science Spreadders',
      'name': 'Symposium der Science Spreadders',
      'text': '',
      'value': 920.13,
    },
    {
      'id': '0.8.2',
      'parent': '0.8',
      'title': 'Informatik Master',
      'name': 'Informatik Master Event',
      'text': '',
      'value': 87.67,
    },
    {
      'id': '0.8.3',
      'parent': '0.8',
      'title': 'Master-Ersti-Veranstaltung',
      'name': 'Master-Ersti-Veranstaltung',
      'text': '',
      'value': 111.67,
    },
    {
      'id': '0.8.4',
      'parent': '0.8',
      'title': 'Anfifete',
      'name': 'Anfifete',
      'text': 'Die Erstsemestereinführungen (im Folgenden “Vorkurs”) in unseren Fächern werden durch die MathPhysInfo ausgerichtet. Als Abschluss dieses Vorkurses gibt es eine abendliche Feier, die sog. AnfiFete.',
      'value': 1539.11,
    },
    {
      'id': '0.8.5',
      'parent': '0.8',
      'title': 'Frustcafe',
      'name': 'Frustcafe',
      'text': 'Nach den ersten paar Wochen Studium kann sich durchaus etwas Frust aufbauen. Hier können Erstis über diesen Frust reden und sich Rat von Studis aus den höheren Semestern einholen. ',
      'value': 223.80,
    },
    {
      'id': '0.8.6',
      'parent': '0.8',
      'title': 'MathPhysTheo',
      'name': 'MathPhysTheo',
      'text': '',
      'value': 19806.96,
    },
  {
    'id': '0.9',
    'parent': '0.0',
    'title': 'Abfluss an die VS, Rücklagen',
    'name': 'bfluss an die VS, zweckgebundene Rücklagen',
    'text': '<p><ul><li>Zweckgebundene Rücklagen: Diese kann die Fachschaft im nächsten Haushaltsjahr zweckgebunden ausgeben</li><li>Abfluss an die VS: Nicht verwendete Mittel fließen an die zentrale Ebene der VS ab.</li></ul></p>',
  },
    {
      'id': '0.9.0',
      'parent': '0.9',
      'title': 'Abfluss an die VS',
      'name': 'Abfluss an die VS',
      'text': '<p>Am Jahresende fließen nicht verwendete Mittel an den zentralen Haushalt der Verfassten Studierendenschaft (VS) ab. Eine allgemeine, zweck-ungebundene Rücklage wie in den Vorjahren gibt es nicht mehr. Ausgenommen hiervon sind zweckgebundene Rücklagen, deren Dauer auf maximal zwei Jahre beschränkt ist.</p>',
      'value': 1791.01,
    },
];

var parents = [];
for (var i = 0; i < data.length; i++) {
  data[i]['events'] = {'click': displaytext};
  parents.push(data[i]['parent']);
}
parents = Array.from(new Set(parents));
var colorSeq = palette('tol-rainbow', parents.length);
var colorMap = {};
for (var i = 0; i < parents.length; i++) {
  colorMap[parents[i]] = "#" + colorSeq[i];
}
for (var i = 0; i < data.length; i++) {
  if (data[i]['parent'] == "0.0" || data[i]['parent'] == '') {
    data[i]['color'] = colorMap[data[i]['id']];
  }
  else {
    data[i]['color'] = colorMap[data[i]["parent"]];
  }
}

Highcharts.setOptions({
  lang: {
    decimalPoint: ',',
    thousandsSep: '.',
    loading: 'Daten werden geladen...',
    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    shortMonths: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    viewFullscreen: "Vollbildmodus",
    exportButtonTitle: "Exportieren",
    printButtonTitle: "Drucken",
    printChart: "Diagramm drucken",
    rangeSelectorFrom: "Von",
    rangeSelectorTo: "Bis",
    rangeSelectorZoom: "Zeitraum",
    downloadPNG: 'Download als PNG-Bild',
    downloadJPEG: 'Download als JPEG-Bild',
    downloadPDF: 'Download als PDF-Dokument',
    downloadSVG: 'Download als SVG-Bild',
    resetZoom: "Zoom zurücksetzen",
    resetZoomTitle: "Zoom zurücksetzen",
    drillUpText: "abc"
  }
});

// Splice in transparent for the center circle
Highcharts.getOptions().colors.splice(0, 0, 'transparent');

Highcharts.chart('ausgabencontainer', {
  chart: {
    height: '100%'
  },
  title: {
    text: 'Ausgaben'
  },
  subtitle: {
    text: 'der Fachschaft MathPhysInfo 2018'
  },
  series: [{
    type: "sunburst",
    data: data,
    allowDrillToNode: true,
    cursor: 'pointer',
    dataLabels: {
      format: '{point.title}',
      filter: {
        property: 'innerArcLength',
        operator: '>',
        value: 40
      }
    },
    levels: [{
      level: 1,
      levelIsConstant: false,
      dataLabels: {
        rotationMode: 'parallel',
        format: '{point.title}:<br>{point.value:,.2f}€',
        filter: {
          property: 'outerArcLength',
          operator: '>',
          value: 64
        }
      }
    }, {
      level: 2,
      dataLabels: {}
    }, {
      level: 3,
      colorVariation: {
        key: 'brightness',
        to: -0.5
      },
      dataLabels: {
      }
    }]
  }],
  tooltip: {
    headerFormat: "",
    pointFormat: '<b>{point.name}</b>: <b>{point.value:,.2f} €</b>'
  }
});

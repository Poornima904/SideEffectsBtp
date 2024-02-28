sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'appsideeffects/test/integration/FirstJourney',
		'appsideeffects/test/integration/pages/additionList',
		'appsideeffects/test/integration/pages/additionObjectPage'
    ],
    function(JourneyRunner, opaJourney, additionList, additionObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('appsideeffects') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheadditionList: additionList,
					onTheadditionObjectPage: additionObjectPage
                }
            },
            opaJourney.run
        );
    }
);
var config = {
    style: 'mapbox://styles/wearepossible/ckqkrwzut17rz17nvd91mrtzq',
    accessToken: 'pk.eyJ1Ijoid2VhcmVwb3NzaWJsZSIsImEiOiJja3FrcXhyN3UwNjQyMnBwZHo0MWF5NGFkIn0.dCuqVp9drHXWjCfafa_psA',
    showMarkers: true,
    markerColor: '#BF0978',
    theme: 'light',
    use3dTerrain: false,
    title: 'Car Free Stories',
    subtitle: 'Take a tour of car-free initiatives in cities around the globe',
    byline: 'By Possible',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'freiburg',
            alignment: 'left',
            hidden: false,
            title: "Freiburg: Transforming Transport",
            image: 'images/freiburg.jpg',
            description: '<p>The city of Freiburg, for example, has been called Germany&rsquo;s environmental capital because of its transformative rethinking of transport. It&rsquo;s not complicated. There is a strong inverse relationship between the share of urban trips taken by public transport, bicycle and on foot and the carbon emissions from road use. More of the former means less of the latter. Car makers are a powerful lobby in Germany and in spite of opposition from local businesses who feared that new controls on car use would have a negative impact on them, Freiburg was able to coordinate transport and land use to increase journeys by bike threefold, double public transport use, and cut the share of trips by car to less than one third (32 per cent), meaning that over two thirds of journeys are now made by public transport, walking and bike.</p><p>The number of cars and light trucks owned per head of population fell in Freiburg over two decades, even as it has risen steadily for Germany as a whole, and rocketed in the US. Freiburg had 419 per 1000 people in 2006, compared with 776 in the US.</p><p>Yet Freiburg began with above-average car use until things started to change around 1970. Bike networks, expanded light rail, pedestrianisation and locating new developments for both homes and businesses by public transport all played their part. By 1980 the car officially took second priority to pedal, foot and mass transit. By 2008 the city had several cycle-only streets, and nine out of ten residents lived in areas where traffic could not go faster than 30 km p/h (19 mph). In many areas the speed limit drops to 7 km p/h (5 mph). The city has set a template now widely being copied.</p>',
            location: {
                center: [7.8421, 47.9990],
                zoom: 11,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'nuremburg',
            alignment: 'right',
            hidden: false,
            title: 'Nuremberg: Winning public approval',
            image: 'images/nuremberg.jpg',
            description: '<p>In an attempt to address congestion and worsening air quality, the historic centre of Nurumberg was progressively pedestrianized from the early 1970s. Potential road chaos resulting from the moves, predicted by some planners, did not materialise, nor did a loss of customers to local shops warned of by business owners. Neither, again, did the traffic transfer wholesale onto nearby roads, only marginal numbers did and there was significant &lsquo;evaporation&rsquo; of car numbers.</p><p>In 1988 the last through-route was closed in a trial that was, at the time, the focus of a high-level of protest and opposition, especially from retailers. Again, severe congestion in adjacent streets was forecast. Again it did not occur. Over a 12 month period total traffic reduced by around one quarter, with only marginal displacement to nearby streets, and in 1989 the measures went from trial to being permanent. Over the course of the year air pollution fell significantly with nitrogen dioxide levels falling by around 30%.</p><p>Subsequently there was a programme of continual improvement of the city centre public space.</p><p>The actual traffic reduction transpired to be double what was expected.</p><p>Before the measures were introduced there was substantial public consultation and long term measuring of traffic flows afterwards to understand on &lsquo;knock&rsquo;-on&rsquo; effects.</p><p>Instead of traffic simply being displaced to other parts of the city within its outer ring road, the initial absolute reduction continued in following years. It meant that against a backdrop of actually rising car ownership, between 1989 and 2000, on the city centre area roads there was a reduction of 10,000 vehicles.</p>',
            location: {
                center: [11.0767, 49.4521],
                zoom: 11,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

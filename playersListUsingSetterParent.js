import { LightningElement } from 'lwc';

export default class PlayersListUsingSetterParent extends LightningElement {
    playersObj = [
        {
            Id: 1,
            name: "MS Dhoni",
            team: "CSK",
            description: "A living legend of the game, MS Dhoni will once again don the CSK jersey in TATA IPL 2025. The five-time IPL-winning captain, known for his calm demeanour and astute leadership, continues to be a pillar of strength for the franchise.",
            imgSrc: "https://documents.iplt20.com/ipl/IPLHeadshot2025/57.png"
        },
        {
            Id: 2,
            name: "Ravichandran Ashwin",
            team: "CSK",
            description: "Ravichandran Ashwin is one of India’s greatest off-spinners, who recently retired from international cricket. He was an integral part of CSK’s title-winning campaigns in 2010 and 2011. Over the years, he has featured in over 212 IPL matches.",
            imgSrc: "https://documents.iplt20.com/ipl/IPLHeadshot2025/45.png"
        },
        {
            Id: 3,
            name: "Ravindra Jadeja",
            team: "CSK",
            description: "A cornerstone of CSK’s success, Ravindra Jadeja has been instrumental in the franchise’s success in the IPL over the years. The star all-rounder is known for his economical left-arm orthodox bowling in the middle overs.",
            imgSrc: "https://documents.iplt20.com/ipl/IPLHeadshot2025/46.png"
        },
        {
            Id: 4,
            name: "Rohit Sharma",
            team: "MI",
            description: "Rohit Sharma is a player that needs no introduction; he is the most successful player in the history of the league, having won six IPL titles, one with Deccan Chargers in 2009 and five as captain of Mumbai Indians (2013, 2015, 2017, 2019, 2020).",
            imgSrc: "https://documents.iplt20.com/ipl/IPLHeadshot2025/6.png"
        },
        {
            Id: 5,
            name: "Suryakumar Yadav",
            team: "MI",
            description: "Surya Kumar Yadav came to the spotlight with his performance at the 2011-12 Ranji Trophy season where he topped the charts for Mumbai scoring 754 runs in 9 games. The same year, Surya Kumar was picked by Mumbai Indians.",
            imgSrc: "https://documents.iplt20.com/ipl/IPLHeadshot2025/174.png"
        },
        {
            Id: 6,
            name: "Jasprit Bumrah",
            team: "MI",
            description: "Jasprit Bumrah has been with MI from the start of his career, making his debut in the 2013 season. Bumrah has been instrumental for the Mumbai franchise as he finished as the team's highest wicket-taker in three of their IPL title wins (2017, 2019, and 2020).",
            imgSrc: "https://documents.iplt20.com/ipl/IPLHeadshot2025/9.png"
        }
    ];
}

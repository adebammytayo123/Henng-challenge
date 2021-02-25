const mailInfo = [
    {
        id: 1,
        from: "aaa@example.com",
        to: "zzz.zzz@example.com",
        subject: "[HR-888] Notice of official announcement",
        timeStamp: "2020/01/02",
        src: false,
        body: "Thank you for your interest in HENNGE. To get the details about the challenge, use the link below: Please be informed that we will not respond to any questions regarding the challenge.Should you have any questions or concerns, please do not hesitate to contact us at gip@hennge.com (for the internship program) or recruit@hennge.com (for non-internship positions).Candidates for the internship program, please read our official announcement regarding 2021 batches here: https://hennge.com/global/lifeathennge/article/201008-gip-2021-slots-announcement.html Good luck!"
    },
    {
        id: 2,
        from: "bbb.bbbb@example.com",
        to: "yyy@example.com",
        subject: '[web:333] "Web Contract"',
        timeStamp: "2020/03/02",
        src: false,
        body: "Thank you for your interest in HENNGE. To get the details about the challenge, use the link below: Please be informed that we will not respond to any questions regarding the challenge.Should you have any questions or concerns, please do not hesitate to contact us at gip@hennge.com (for the internship program) or recruit@hennge.com (for non-internship positions).Candidates for the internship program, please read our official announcement regarding 2021 batches here: https://hennge.com/global/lifeathennge/article/201008-gip-2021-slots-announcement.html Good luck!"
    },
    {
        id: 3,
        from: "ccc@example.com",
        to: "xxx@example.com",
        subject: "Happy New Year! Greetings for the New Year",
        timeStamp: "2020/04/02",
        src: true, 
        body: "Thank you for your interest in HENNGE. To get the details about the challenge, use the link below: Please be informed that we will not respond to any questions regarding the challenge.Should you have any questions or concerns, please do not hesitate to contact us at gip@hennge.com (for the internship program) or recruit@hennge.com (for non-internship positions).Candidates for the internship program, please read our official announcement regarding 2021 batches here: https://hennge.com/global/lifeathennge/article/201008-gip-2021-slots-announcement.html Good luck!"
    },
    {
        id: 4,
        from: "ddd.ddd@example.com",
        to: "vvv.vvv@example.com",
        subject: "[HR-887(Revised: Office Expansion Project Team)] Notice of office",
        timeStamp: "2020/03/06",
        src: false,
        body: "Thank you for your interest in HENNGE. To get the details about the challenge, use the link below: Please be informed that we will not respond to any questions regarding the challenge.Should you have any questions or concerns, please do not hesitate to contact us at gip@hennge.com (for the internship program) or recruit@hennge.com (for non-internship positions).Candidates for the internship program, please read our official announcement regarding 2021 batches here: https://hennge.com/global/lifeathennge/article/201008-gip-2021-slots-announcement.html Good luck!"
    },
    {
        id: 5,
        from: "eee@example.com",
        to: "sss@example.com",
        subject: "[Github] Logout page",
        timeStamp: "2020/04/01",
        src: false,
        body: "Thank you for your interest in HENNGE. To get the details about the challenge, use the link below: Please be informed that we will not respond to any questions regarding the challenge.Should you have any questions or concerns, please do not hesitate to contact us at gip@hennge.com (for the internship program) or recruit@hennge.com (for non-internship positions).Candidates for the internship program, please read our official announcement regarding 2021 batches here: https://hennge.com/global/lifeathennge/article/201008-gip-2021-slots-announcement.html Good luck!"
    },
    {
        id: 6,
        from: "fff.ffff@example.com",
        to: "qqq.qqq@example.com",
        subject: "[dev]Postfix 3.1.12/3.2.9/3.3.4/3.3.5",
        timeStamp: "2020/04/15",
        src: false,
        body: "Thank you for your interest in HENNGE. To get the details about the challenge, use the link below: Please be informed that we will not respond to any questions regarding the challenge.Should you have any questions or concerns, please do not hesitate to contact us at gip@hennge.com (for the internship program) or recruit@hennge.com (for non-internship positions).Candidates for the internship program, please read our official announcement regarding 2021 batches here: https://hennge.com/global/lifeathennge/article/201008-gip-2021-slots-announcement.html Good luck!"
    },
    {
        id: 7,
        from: "ggg@example.com",
        to: "ppp@example.com",
        subject: "RE[Github] Brush-up on loading animation",
        timeStamp: "2020/04/23",
        src: false,
        body: "Thank you for your interest in HENNGE. To get the details about the challenge, use the link below: Please be informed that we will not respond to any questions regarding the challenge.Should you have any questions or concerns, please do not hesitate to contact us at gip@hennge.com (for the internship program) or recruit@hennge.com (for non-internship positions).Candidates for the internship program, please read our official announcement regarding 2021 batches here: https://hennge.com/global/lifeathennge/article/201008-gip-2021-slots-announcement.html Good luck!"
    },
    {
        id: 8,
        from: "hhh.hhh@example.com",
        to: "ooo.ooo@example.com",
        subject: "[HR-888] Notice of official announcement",
        timeStamp: "2020/07/18",
        src: true,
        body: "Thank you for your interest in HENNGE. To get the details about the challenge, use the link below: Please be informed that we will not respond to any questions regarding the challenge.Should you have any questions or concerns, please do not hesitate to contact us at gip@hennge.com (for the internship program) or recruit@hennge.com (for non-internship positions).Candidates for the internship program, please read our official announcement regarding 2021 batches here: https://hennge.com/global/lifeathennge/article/201008-gip-2021-slots-announcement.html Good luck!"
    },
    {
        id: 9,
        from: "iii@example.com",
        to: "nnn.example.com",
        subject: "I love you",
        timeStamp: "2019/12/25",
        src: true,
        body: "Thank you for your interest in HENNGE. To get the details about the challenge, use the link below: Please be informed that we will not respond to any questions regarding the challenge.Should you have any questions or concerns, please do not hesitate to contact us at gip@hennge.com (for the internship program) or recruit@hennge.com (for non-internship positions).Candidates for the internship program, please read our official announcement regarding 2021 batches here: https://hennge.com/global/lifeathennge/article/201008-gip-2021-slots-announcement.html Good luck!"
    },
    {
        id: 10,
        from: "Pablo-Diego-@example.com",
        to: "Pablo-Diego-Jose-Francisco@example.com",
        subject: "[info:888]ABC EQUIPMENT COMPANY",
        timeStamp: "2019/12/31",
        src: false,
        body: "Thank you for your interest in HENNGE. To get the details about the challenge, use the link below: Please be informed that we will not respond to any questions regarding the challenge.Should you have any questions or concerns, please do not hesitate to contact us at gip@hennge.com (for the internship program) or recruit@hennge.com (for non-internship positions).Candidates for the internship program, please read our official announcement regarding 2021 batches here: https://hennge.com/global/lifeathennge/article/201008-gip-2021-slots-announcement.html Good luck!"
    },
];

export const archiveBody = 
{
    id: 1,
    from: "aaa@example.com",
    to: "zzz.zzz@example.com",
    subject: "[HR-888] Notice of official announcement",
    timeStamp: "2020/01/02",
    src: false,
    body: "Thank you for your interest in HENNGE. To get the details about the challenge, use the link below: Please be informed that we will not respond to any questions regarding the challenge.Should you have any questions or concerns, please do not hesitate to contact us at gip@hennge.com (for the internship program) or recruit@hennge.com (for non-internship positions).Candidates for the internship program, please read our official announcement regarding 2021 batches here: https://hennge.com/global/lifeathennge/article/201008-gip-2021-slots-announcement.html Good luck!"
}

export default mailInfo;
-- table namecard

CREATE TABLE [namecard].[namecard_data] (
    [id]                                INT             NOT NULL    AUTO_INCREMENT,
    [firstname]                         TEXT            NOT NULL,
    [lastname]                          TEXT            NOT NULL,
    [department]                        TEXT            NOT NULL,
    [jobtitle]                          TEXT            NOT NULL,
    [email]                             TEXT            NOT NULL,
    [officephonenumber]                 INT             NOT NULL,
    [mobilephonenumber]                 INT             NOT NULL,
    [organization]                      VARCHAR(255)    NOT NULL    DEFAULT'The Hong Kong Polytechnic University',
    [urladdress]                        VARCHAR(255)    NOT NULL    DEFAULT'www.polyu.edu.hk',
    [address]                           TEXT            NOT NULL,
    [language]                          VARCHAR(255)    NOT NULL,
    PRIMARY KEY ([id]);
);

-- table orcid
CREATE TABLE [namecard].[orcid_data] (
    [id]                                INT             NOT NULL    AUTO_INCREMENT, 
    [orcidURL]                          VARCHAR(255)    NOT NULL,
    PRIMARY KEY ([id]);
)

-- table login User
CREATE TABLE [namecard].[userLogin_data] (
    [netId]                             VARCHAR(255)    NOT NULL,
    [name]                              VARCHAR(255)    NOT NULL,
    [userId]                            VARCHAR(255)    NOT NULL,
    [deptAbbr]                          VARCHAR(255)    NOT NULL,
    [email]                             VARCHAR(255)    NOT NULL,
    [status]                            VARCHAR(255)    NOT NULL,
    PRIMARY KEY ([netId]);
)

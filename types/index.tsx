export interface User {
  id: string;    
  name: string | null;
  email: string | null;    
  emailVerified: Date | null;
  createdAt: Date;     
  updatedAt: Date;
  isSubscriber: boolean;        
}

export interface Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
}

export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string
  access_token: string;
  expires_at: number;
  token_type: string
  scope: string;
  id_token: string;
  session_state: string;
  oauth_token_secret: string;
  oauth_token: string;
}

export interface PlayerStat {
  StatID: number;
  TeamID: number;
  PlayerID: number;
  SeasonType: number;
  Season: number;
  Name: string;
  Team: string;
  Position: string;
  Started: number;
  FanDuelSalary: number;
  DraftKingsSalary: number;
  FantasyDataSalary: number;
  YahooSalary: number;
  InjuryStatus: string;
  InjuryBodyPart: string;
  InjuryStartDate: string | null;
  InjuryNotes: string;
  FanDuelPosition: string;
  DraftKingsPosition: string;
  YahooPosition: string;
  OpponentRank: number;
  OpponentPositionRank: number;
  GlobalTeamID: number;
  FantasyDraftSalary: number | null;
  FantasyDraftPosition: string;
  GameID: number;
  OpponentID: number;
  Opponent: string;
  Day: Date;
  DateTime: Date;
  HomeOrAway: string;
  IsGameOver: boolean;
  GlobalGameID: number;
  GlobalOpponentID: number;
  Updated: Date;
  Games: number;
  FantasyPoints: number;
  Minutes: number;
  Seconds: number;
  FieldGoalsMade: number;
  FieldGoalsAttempted: number;
  FieldGoalsPercentage: number;
  EffectiveFieldGoalsPercentage: number;
  TwoPointersMade: number;
  TwoPointersAttempted: number;
  TwoPointersPercentage: number;
  ThreePointersMade: number;
  ThreePointersAttempted: number;
  ThreePointersPercentage: number;
  FreeThrowsMade: number;
  FreeThrowsAttempted: number;
  FreeThrowsPercentage: number;
  OffensiveRebounds: number;
  DefensiveRebounds: number;
  Rebounds: number;
  OffensiveReboundsPercentage: number;
  DefensiveReboundsPercentage: number;
  TotalReboundsPercentage: number;
  Assists: number;
  Steals: number;
  BlockedShots: number;
  Turnovers: number;
  PersonalFouls: number;
  Points: number;
  TrueShootingAttempts: number;
  TrueShootingPercentage: number;
  PlayerEfficiencyRating: number;
  AssistsPercentage: number;
  StealsPercentage: number;
  BlocksPercentage: number;
  TurnOversPercentage: number;
  UsageRatePercentage: number;
  FantasyPointsFanDuel: number;
  FantasyPointsDraftKings: number;
  FantasyPointsYahoo: number;
  PlusMinus: number;
  DoubleDoubles: number;
  TripleDoubles: number;
  FantasyPointsFantasyDraft: number;
  IsClosed: boolean;
  LineupConfirmed: boolean;
  LineupStatus: string;
}

export interface ActivePlayer {
  PlayerID: number;
  SportsDataID: string;
  Status: string;
  TeamID: number;
  Team: string;
  Jersey: number;
  PositionCategory: string;
  Position: string;
  FirstName: string;
  LastName: string;
  BirthDate: string; 
  BirthCity: string;
  BirthState: string;
  BirthCountry: string;
  GlobalTeamID: number;
  Height: number;
  Weight: number;
}

export interface TeamStat {
  StatID: number;
  TeamID: number;
  SeasonType: number;
  Season: number;
  Name: string;
  Team: string;
  Wins: number;
  Losses: number;
  Possessions: number;
  GlobalTeamID: number;
  GameID: number;
  OpponentID: number;
  Opponent: string;
  Day: string;
  DateTime: string;
  HomeOrAway: string;
  IsGameOver: boolean;
  GlobalGameID: number;
  GlobalOpponentID: number;
  Updated: string;
  Games: number;
  FantasyPoints: number;
  Minutes: number;
  Seconds: number;
  FieldGoalsMade: number;
  FieldGoalsAttempted: number;
  FieldGoalsPercentage: number;
  EffectiveFieldGoalsPercentage: number;
  TwoPointersMade: number;
  TwoPointersAttempted: number;
  TwoPointersPercentage: number;
  ThreePointersMade: number;
  ThreePointersAttempted: number;
  ThreePointersPercentage: number;
  FreeThrowsMade: number;
  FreeThrowsAttempted: number;
  FreeThrowsPercentage: number;
  OffensiveRebounds: number;
  DefensiveRebounds: number;
  Rebounds: number;
  OffensiveReboundsPercentage: number | null;
  DefensiveReboundsPercentage: number | null;
  TotalReboundsPercentage: number | null;
  Assists: number;
  Steals: number;
  BlockedShots: number;
  Turnovers: number;
  PersonalFouls: number;
  Points: number;
  TrueShootingAttempts: number;
  TrueShootingPercentage: number;
  PlayerEfficiencyRating: number | null;
  AssistsPercentage: number | null;
  StealsPercentage: number | null;
  BlocksPercentage: number | null;
  TurnOversPercentage: number | null;
  UsageRatePercentage: number | null;
  FantasyPointsFanDuel: number;
  FantasyPointsDraftKings: number;
  FantasyPointsYahoo: number;
  PlusMinus: number;
  DoubleDoubles: number;
  TripleDoubles: number;
  FantasyPointsFantasyDraft: number;
  IsClosed: boolean;
  LineupConfirmed: boolean | null;
  LineupStatus: string;
}


export interface ActiveTeam {
  TeamID: number;
  Key: string;
  Active: boolean;
  City: string;
  Name: string;
  LeagueID: number;
  StadiumID: number;
  Conference: string;
  Division: string;
  PrimaryColor: string;
  SecondaryColor: string;
  TertiaryColor: string;
  QuaternaryColor: string;
  WikipediaLogoUrl: string;
  WikipediaWordMarkUrl: string | null;
  GlobalTeamID: number;
  NbaDotComTeamID: number;
  HeadCoach: string;
}

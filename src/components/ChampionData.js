import React, { useState } from 'react';
import { Box, Button, Grid, Card, CardActionArea, CardMedia, Dialog, DialogTitle, DialogContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControl, InputLabel, Select, MenuItem, Link } from '@mui/material';
import championData from '/ChampionData.json';
import DamageBarChart from './DamageChart';

const ChampionGallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedChampion, setSelectedChampion] = useState(null);
  const [selectedChampionName, setSelectedChampionName] = useState('');
  const [selectedLane, setSelectedLane] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleClickOpen = (championName) => {
    const champion = championData[championName];
    setSelectedChampion(champion);
    setSelectedChampionName(championName);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filterChampions = () => {
    return Object.keys(championData).filter((championName) => {
      const champion = championData[championName];
      const lanesMatch = selectedLane ? champion.lane.split('/').includes(selectedLane) : true;
      const rolesMatch = selectedRole ? champion.role.split('/').includes(selectedRole) : true;
      return lanesMatch && rolesMatch;
    });
  };

  const handleSelectLane = (lane) => {
    setSelectedLane(lane);
  };

  const handleSelectRole = (role) => {
    setSelectedRole(role);
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {['', 'TOP', 'MID', 'BOT', 'JG', 'SUP', 'ADC'].map((lane) => (
          <Button
            key={lane}
            variant={selectedLane === lane ? "contained" : "outlined"}
            color={selectedLane === lane ? "primary" : "inherit"}
            onClick={() => handleSelectLane(lane)}
          >
            {lane || '全てのレーン'}
          </Button>
        ))}
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginTop: 2 }}>
        {['', 'ファイター', 'タンク', 'メイジ', 'マークスマン', 'サポート', 'アサシン'].map((role) => (
          <Button
            key={role}
            variant={selectedRole === role ? "contained" : "outlined"}
            color={selectedRole === role ? "primary" : "inherit"}
            onClick={() => handleSelectRole(role)}
          >
            {role || '全てのロール'}
          </Button>
        ))}
      </Box>
        <br />
      <Grid container spacing={1}>
        {filterChampions().map((championName) => (
          <Grid item xs={1.5} key={championName}>
            <Card>
              <CardActionArea onClick={(event) => {
                event.preventDefault();
                handleClickOpen(championName);
              }}>
                <Link href={`/lol-starter-archive/${championName}`} underline="none">
                  <CardMedia
                    component="img"
                    sx={{ maxWidth:"100", maxHeight:"100" }}
                    image={`/lol-starter-archive/img/チャンピオン/サモナーアイコン/${championName}/${championName}.jpg`}
                    alt={championName}
                  />
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedChampion && (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle align='center'>{selectedChampionName}</DialogTitle>
          <DialogContent>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <img
                src={`/lol-starter-archive/img/チャンピオン/サモナーアイコン/${selectedChampionName}/${selectedChampionName}.jpg`}
                alt={selectedChampionName}
                style={{ maxWidth: '100px', maxHeight: '100px' }}
              />
            </div>
            <Typography gutterBottom variant="h5" component="div">
              {`ロール - ${selectedChampion.role}`}
            </Typography>
            <DamageBarChart data={[
              {
                name: "ダメージ",
                AD: selectedChampion.damage.AD,
                AP: selectedChampion.damage.AP,
                True: selectedChampion.damage.True
              }
            ]} />
            <Typography gutterBottom variant="h5" component="div">
              レーン: {selectedChampion.lane}
            </Typography>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>対応<br />キー</TableCell>
                    <TableCell align="center">名前</TableCell>
                    <TableCell align="center">説明</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(selectedChampion.skills).map(([skillKey, skillValue]) => (
                    <TableRow key={skillKey}>
                      <TableCell align="center" component="th" scope="row">{skillKey.toUpperCase()}</TableCell>
                      <TableCell align="center">{skillValue.name}</TableCell>
                      <TableCell align="center">{skillValue.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ChampionGallery;

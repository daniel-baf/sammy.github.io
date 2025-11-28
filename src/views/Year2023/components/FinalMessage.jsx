import { Container, Typography, Box, Alert, Paper } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

function FinalMessage() {
    const { width, height } = useWindowSize();

    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Confetti
                width={width}
                height={height}
                recycle={false}
                numberOfPieces={500}
                gravity={0.2}
            />
            <Paper
                elevation={0}
                sx={{
                    p: { xs: 3, md: 6 },
                    textAlign: 'center',
                    border: '1px solid',
                    borderColor: 'secondary.main',
                    backgroundColor: '#fffdf9'
                }}
            >
                <Favorite sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />

                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 300, color: 'text.primary' }}>
                    ¡Uy!, si llegaste aca, significa que tas loca
                </Typography>

                <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'secondary.main', fontStyle: 'italic', mb: 4 }}>
                    Bobis
                </Typography>

                <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                        O sea que bonito que hayas terminado con mis mensadas jajaja, pero yo no se si lo hubiera
                        temrinado, en fin, <Box component="span" sx={{ color: 'error.main', fontWeight: 600 }}>te quiero decir que te quiero</Box>
                    </Typography>

                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                        Quiero decirte, que <Box component="span" sx={{ color: 'error.main', fontWeight: 600 }}>te quiero mucho</Box>, y te mando un abrazo <Box component="span" sx={{ color: 'warning.main', fontWeight: 600 }}>enooooorrrmeeeeeeeeeeeeeeeeeeeeeeeeeeeee</Box>,
                        besos en tu carita preciosa, espero la pases bien y disfrutes a tu manera de este dia, se que es
                        solo un dia mas, pero igual, no tiene nada de malo disfrutar de este dia en el que serás el <Box component="span" sx={{ color: 'info.main', fontWeight: 600 }}>centro de atención</Box>. Muacks.
                    </Typography>

                    <Box sx={{ my: 6, textAlign: 'center' }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 300, letterSpacing: '0.1em', color: 'text.primary' }}>
                            AHORA, MODO SERIO
                        </Typography>
                        <Box sx={{ width: 60, height: 2, bgcolor: 'secondary.main', mx: 'auto', mt: 2 }} />
                    </Box>

                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                        Te quiero, Sam, y me duele pensar que te hago sentir mal. Mientras conversábamos, me quedé en
                        silencio, no porque no valore tu presencia ni te dé importancia, sino porque <Box component="span" sx={{ color: 'error.main', fontWeight: 600 }}>duele saber que, a pesar de esforzarme por hacerte sentir bien, a menudo obtengo un "no" como respuesta</Box>. No me gusta
                        recibir ese tipo de respuesta, especialmente cuando intento expresar afecto con las personas que
                        son importantes para mí.
                    </Typography>

                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                        Incluso al intentar explicar que con las personas que más aprecio también puedo ser brusco, recibir
                        un "lo tomo como una excusa" es chocante. Quizás no fue el momento ni la forma adecuada de decirlo,
                        pero resulta complicado cuando la persona que quiero, critica mis efuerzos, aunque lo comprendo.
                    </Typography>

                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                        Prefiero responsabilizarme a mí mismo y decirme "tú eres el problema" porque es más fácil, aunque
                        en realidad llevo meses esforzándome por demostrarte lo importante que eres para mí, y escuchar un
                        "no te importo" duele profundamente. Lo del juego es solo una fachada; en realidad, tengo la
                        esperanza de que decidas no continuar con él, ya que exponerme de esa manera me hace sentir
                        incómodo y extraño.
                    </Typography>

                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                        Estoy triste, sinceramente, y aunque no tengo ganas de hablar, encuentro distracción viendo videos
                        de programación o programando. Esto es mi manera de escapar de la realidad, mi forma de matar el
                        tiempo. El problema no radica en lo que haces o dejas de hacer; creo que el problema, en realidad,
                        es que tiro la toalla. Lo he mencionado antes, sigo pensando que no sé amar, y siempre obtengo
                        mejores resultados con parejas a las que no les doy demasiada importancia, ya que al no formar un
                        fuerte vínculo, mis errores no afectan tanto. Recuerdo la vez que estábamos cocinando y Sajvin dijo
                        "he llegado a creer que yo soy el problema". Es gracioso porque me siento igual. No quiero intentar
                        de otra forma, pero <Box component="span" sx={{ color: 'success.main', fontWeight: 600 }}>estoy dispuesto a dejar de jugar de manera brusca si eso es lo que se necesita</Box>.
                        Aunque digas que no te molesta y que te gusta mi sentido del humor, no quiero correr el riesgo de
                        lastimarte físicamente de nuevo, porque me partió el corazón escuchar en un tono de angustia las
                        palabras "me dio miedo verme los morados" con la voz quebrada a punto de llorar.
                    </Typography>

                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                        "No porque también muerdes a Fabián y no lo haces como conmigo", esas palabras han estado en mi
                        mente toda la madrugada. Quiero dejar de comportarme así, como lo hice con Yudy, como lo haré
                        contigo. Aunque me entristece, sé que va ser un proceso, en el que me sentiré raro porque dejaré
                        de hacer la forma en la que según yo, demostraba cariño, pero no importa; es parte de crecer,
                        dejar de hacer cosas para aprender nuevas. Esta noche la estoy pasando mal. A pesar de todas las
                        cosas que me dijiste, en mi cabeza solo resuena el pensamiento de que te lastimé. Recuerdo que no
                        es la primera vez, la primera vez que me pasó esto, fué cuando me contaste que Pablo dijo
                        "pensatelo", cuando le contaste del primer golpe que te dí.
                    </Typography>

                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                        Mi problema es, que <Box component="span" sx={{ color: 'error.main', fontWeight: 600 }}>me importas</Box>, y cada vez que hablamos, escucho que dices cosas lindas de mi,
                        pero solo tú, es común escuchar que tus conocidos e incluso los mios, decian que no, que no valia
                        la pena, y siempre, siempre rematas con el "pero es Daniel", y eso me molesta, porque significa
                        que eres tú nadando contra la corriente, y muchos dirian que "Valora que ella ve en ti lo que
                        otros no ven", pero es imposible no pensar en la contraparte, en "y si ella es la que está cegada,
                        o no quiere admitir la verdad"
                    </Typography>

                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                        En fin, por eso me siento mal, y no lo tomes como un "quiero terminar", porque <Box component="span" sx={{ color: 'success.main', fontWeight: 600 }}>quiero trabajar en nosotros</Box>, pero estoy 100% seguro de dejar de jugar brusco, no quiero volver a escucharte triste,
                        y no quiero que respondas, o que intentes decir un "no me referia a eso", "no quiero que dejes de
                        hacer esas cosas", porque es algo que yo quiero hacer. Sin embargo, estoy aquí para que hablemos
                        de lo que sea, cuando quieras.
                    </Typography>
                </Box>

                <Box sx={{ mt: 6 }}>
                    <Alert severity="success" icon={<Favorite fontSize="inherit" />} sx={{ justifyContent: 'center', fontSize: '1.1rem' }}>
                        ¡TE QUIEROOOOR! Mi niña hermosa.
                    </Alert>
                </Box>
            </Paper>
        </Container>
    );
}

export default FinalMessage;

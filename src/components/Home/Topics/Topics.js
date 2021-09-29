import React,{useState} from 'react'
import Topic from './Topic'
import t1 from '../../../images/topic1.jpg'
import t2 from '../../../images/topic2.jpg'
import './Topics.css'
import { Container,Modal,Button } from 'react-bootstrap'

function Topics() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container className="topic-cont">
            <h2 style={{fontSize:"30px",fontWeight:"600",color:'#0E79BD'}}>TOPICS YOU CAN'T MISS</h2>
            {/* <Topic title="Topics you can't miss"
             content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
             classname="1"
             />
             <Topic title="How to clean/cut your seafood"
             content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
             classname="2"
             /> */}
             <Container className="topic-box">
            <div className="gradient">
            <span className="topic-title">How to cut a fish</span>
            <p className="topic-content">While catching a fish can be as simple as casting out a line with bait and being patient, filleting a fish
            takes a little more finesse. Knowing the correct process to fillet a fish can make the difference
            between getting barely enough meat for a side dish and harvesting enough for a fish feast. Plus,
            freshly cut fish fillets taste much better than pre-cut.</p><br/>
            <span className="tread-more" onClick={handleShow}>READ MORE </span><svg width="13.43" height="23.46" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{position:"relative"}}
            >
            <path d="M2.62435 7.88062C2.8081 8.06437 3.10435 8.06437 3.2881 7.88062L6.40435 4.76437C6.5506 4.61812 6.5506 4.38187 6.40435 4.23562L3.2881 1.11937C3.10435 0.935621 2.8081 0.935621 2.62435 1.11937C2.4406 1.30312 2.4406 1.59937 2.62435 1.78312L5.33935 4.50187L2.6206 7.22062C2.4406 7.40062 2.4406 7.70062 2.62435 7.88062Z" fill="#0E79BD" stroke="#0E79BD"/>
            </svg>
            </div>
        </Container>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How to cut Fish</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        How to cut Fish
How to Fillet a Fish
While catching a fish can be as simple as casting out a line with bait and being patient, filleting a fish
takes a little more finesse. Knowing the correct process to fillet a fish can make the difference
between getting barely enough meat for a side dish and harvesting enough for a fish feast. Plus,
freshly cut fish fillets taste much better than pre-cut.<br/><br/>
Bleeding, Descaling, and Gutting the Fish<br/><br/>
1.Bleed out the fish, if it is a fresh catch, to preserve the meat. Make a shallow incision with your
knife or scissors under the fish&#39;s gills, and snap its head backwards to break the spinal cord. Thread a
rope through the fish&#39;s mouth and out of its gills and let it bleed out into the water for a few minutes.

<ul>
<li>Bleeding a freshly caught fish is vital to preserving its taste and texture. A fish that is caught
but not bled out will be much messier on the cutting board and, in its final moments, the
stress and struggle of death can make the meat taste acidic.</li>
<li>Put the fresh catch on ice after you have thoroughly bled it out, to further preserve its
freshness. You should keep it on ice until you are ready to scale and clean the fish.</li> </ul>

<br/><br/>

2. Descale the fish with the back of a knife. You can scrape the scales off of a whole fish by using
long strokes from the tail to the head of the fish with the back of a knife. Alternatively, skinning the fish
also removes its scales, and can be done after you have successfully filleted it.
<ul><li>
You can also ask your fishmonger to descale the fish for you upon purchase.</li>
<li>Descaling the fish is recommended but not essential — if you like scales with your fish fillet,
leave them on!</li></ul>

<br/><br/>

3. Cut the fish&#39;s stomach open to remove its guts. Starting from the tail, run your knife all the way
along the fish&#39;s body towards the head and open the fish up. Remove the guts with your hands,
wearing gloves, and use cold water to rinse out any leftover insides. You should have a completely
clean fish at this point, save for the skin.
<br/>This can also be done with fresh fish at the body of water you caught it at, making it much
easier to handle its guts and stomach contents. The smell of the guts can attract bears,
eagles, and other fish-loving animals, though, so be aware of the wildlife in the area and
take the necessary precautions, such as bringing a gun and having a place to retreat to.

<ul><li>Gutting can be a nasty process, so be sure to have a trash bin nearby that you can throw
them into if not at the riverside. Be sure to wipe down your counter afterwards, as the risk of
cross-contamination is high when removing guts.</li></ul>
<br/><br/>
4. Chop off the head at the gills. Lay the fish on one of its sides, and cut the head off with a chef&#39;s
knife right where it meets the gills. Cut through the fish&#39;s spine, which can take a little extra pressure,
and follow through to sever the head from the body. You can discard the head, or keep it on ice to use
in making fish stock.<br/><br/>

Part2
<br/><br/>Making Precise Fillet Cuts<br/>



1. Cut away fins along the sides, top, and underside with scissors. This should be done before you
make cuts to make your work more precise and remove parts of the fish that might get in the way.
<ul>
<li>This can be done at the same time as de-scaling, but must be done before you begin to cut
away the fillet.</li>
</ul>

<br/><br/>
2. Run your fillet knife down the fish&#39;s spine from tail to head. Start your cut at the base of the tail,
and use the fish&#39;s backbone to guide your cut. Don&#39;t cut roughly or saw it away; instead, use a smooth
and gentle slicing motion.
<ul>
<li>As you slice the fillet from the fish, lift the flesh to make sure your cut is still moving in a
straight line across the backbone.</li></ul>
<br/><br/>
3. Run your fillet knife over the rib cage rather than through it. Delicately work with the shape of the
rib cage instead of sawing through the bones. You can remove these bones with tweezers at a later
time.


4. Repeat the cut for the other side of the fish. Turn the fish over so the spine is touching the cutting
board, and run your knife once again down the backbone from the tail to the head. Because the fish is
lighter and does not have as much to grasp onto as before, the second side can be much trickier than
the first. You should have two large fillets at this point.
<ul><li>Watch out for the fish slipping off of the cutting board, as it may be more slick after the first
fillet is cut away.
</li>
</ul>

5. Consider cutting each fillet into &quot;steaks&quot; for grilling. If you plan on grilling or barbecuing your fish,
it is much easier to work with if it is cut into steaks. Measure out slices about 1.5 in (3.8 cm) thick on
each fillet, and cut with your chef knife.   Keep the leftover meat for smaller steaks for kids or to use in
fish stock. This is especially effective with large fish such a salmon.
<br/>If you decide to turn your fillet into steaks, do not remove the bones or the skin, as it
maintains the structure of the flesh on the grill or barbeque.

<br/><br/>Part3<br/><br/>
Removing Bones, Skin, and Fat<br/>


1. De-bone the filets with a large set of tweezers or boning knife. There is no way to totally avoid
getting bones in your fillet, but you can remove them once the flesh is cut away from the spine. Feel
along the middle of your fillet from the head to the tail end for bones, and use your tweezers to
carefully remove them.


2. Skin the fillet with a fillet knife. Place the fillet skin-side down and make a cut where the skin meets
the flesh. Slowly move your knife towards the opposite end, being sure to firmly grasp the skin and
pull it away as you slice.
<br/>Similarly, to de-scaling the fish, it is recommended to remove the skin before preparing a
fillet to eat, but if you like skin on your fish, go ahead and leave it on. The chewy skin is
unappealing to some, but it does contain additional nutrients and vitamins.


3. Trim away excess belly fat and other fat. Depending on the type of fish you have, it may have a lot
or hardly any belly fat. Salmon, lake trout, and mackerel are known for being high in fat content.   Using
your fillet knife carefully cut this away as you would with a steak — after all, these fillets are
essentially fish steaks!<br/>
If you like fat on your food, by all means leave it on, but generally fish fillets are served as
lean as possible.

4. Rinse the fillet with water, then store it on ice for later use. Run water over the fillet then dry it
with a paper towel, being careful not to leave any fibers on the flesh. If you won&#39;t eat the fish within
two days, you should wrap it tightly in plastic wrap, put it into a ziplock bag, and keep it in the
freezer.   The fish will stay good for 2 to 3 months in the freezer.<br/>
<ul>
<li>If you plan on eating it within two days, fill a container large enough to hold the fish halfway
with crushed ice, place the fish on top, cover the container and store it in the fridge.</li>
<li>You should rotate ice if it melts before you eat the fish. Keep in mind that fish will rot in the
refrigerator if not kept on ice.</li>
</ul>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


        </Container>
    )
}

export default Topics
